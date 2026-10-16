"use client";

import { useEffect, useState } from "react";

/**
 * Hidden spam traps read by the form actions: a honeypot people never see, and the time the
 * form became interactive (set after hydration, so a prerendered page never carries a stale value).
 */
export function FormTraps() {
  const [startedAt, setStartedAt] = useState("");
  useEffect(() => setStartedAt(String(Date.now())), []);
  return (
    <>
      <input type="hidden" name="startedAt" value={startedAt} />
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
    </>
  );
}
