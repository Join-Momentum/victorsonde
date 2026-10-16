import type { ReactNode } from "react";

type Props = {
  headers: string[];
  rows: ReactNode[][];
};

/** Plain reference table; the first column is styled as a mono key. Scrolls sideways on small screens. */
export function NotesTable({ headers, rows }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] border-collapse text-[.92rem]">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="border-b-2 border-dark py-2.5 pr-3 text-left font-mono text-[.65rem] font-normal uppercase tracking-[.14em] text-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={
                    c === 0
                      ? "whitespace-nowrap border-b border-paper-2 py-3 pr-3 align-top font-mono text-[.73rem] text-orange-ink"
                      : "border-b border-paper-2 py-3 pr-3 align-top"
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
