# Financial Resilience — Compliance Approval Log

Signed audit record of every `ComplianceBlock` approval, supplementing git
history (08-technical.md §3). One entry per approval — never edit a past
entry; a new approval (including a re-approval after edit) is a new entry.

**Format per entry:**

```
## <slug> — v<version>
- Status: Approved
- Approver: <named individual>
- Approval date: <YYYY-MM-DD>
- Expiry date: <YYYY-MM-DD>
- PR: <link>
```

No entries yet — nothing in `content/financial/disclosures.ts` has been
approved. The compliance owner must also confirm in writing that this file
plus git history constitutes an adequate audit record before the FS pod
publishes anything (`10-quality-and-launch.md` §3).
