"use client";

import { Button } from "@/components/ui/Button";
import { trackDynamic } from "@/lib/analytics";
import type { PurchaseOption } from "@/types/models";

/**
 * Provider-agnostic commerce layer (06-content-media.md §4.3) — this
 * component only ever knows the `PurchaseOption` shape. Swapping from
 * `placeholder` to `stripe_payment_link` (Phase 3) is a content edit to
 * the book's `purchaseOptions[]`, never a change to this component.
 */
export function PurchaseButton({ option, book }: { option: PurchaseOption; book: string }) {
  if (!option.available) return null;

  if (option.provider === "placeholder") {
    return (
      <Button variant="ghost" disabled>
        {option.format} — available at launch
      </Button>
    );
  }

  return (
    <Button
      href={option.url ?? "#"}
      onClick={() =>
        trackDynamic("book_purchase_click", { book, retailer: option.retailerName, format: option.format, price: option.price })
      }
    >
      {option.retailerName ? `Buy on ${option.retailerName}` : `Buy ${option.format}`} — {option.currency} {option.price}
    </Button>
  );
}
