"use client";

import { useEffect, useRef } from "react";

/**
 * Hidden spam traps read by the form actions: a honeypot people never see, and how long the form
 * was open before sending. The elapsed time is measured in the browser and added as the form data
 * is built, so it never compares the visitor's clock with the server's.
 */
export function FormTraps() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const form = ref.current?.closest("form");
    if (!form) return;
    const openedAt = performance.now();
    const onFormData = (e: FormDataEvent) => e.formData.set("elapsed", String(Math.round(performance.now() - openedAt)));
    form.addEventListener("formdata", onFormData);
    return () => form.removeEventListener("formdata", onFormData);
  }, []);

  return (
    <div ref={ref} aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
      {/* Deliberately meaningless name so browser autofill leaves it alone. */}
      <label>
        Leave blank
        <input type="text" name="vs_hp" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
