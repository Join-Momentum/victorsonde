/**
 * Renders one or more JSON-LD blocks (09-seo-analytics-crm.md §1.4:
 * Person/Organization/Article/etc, plus BreadcrumbList on every page below
 * root). Pass plain schema.org objects — this component only serialises
 * them, it doesn't validate shape.
 */
type JsonLdObject = Record<string, unknown>;

interface StructuredDataProps {
  data: JsonLdObject | JsonLdObject[];
}

export function StructuredData({ data }: StructuredDataProps) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

export function breadcrumbList(items: { name: string; url: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
