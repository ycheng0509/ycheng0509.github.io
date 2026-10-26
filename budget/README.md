# Budget Studio

A buildless, browser-local household budget calculator for GitHub Pages at `/budget/`.

## Features

- Monthly and annual payment periods; an annual bill marked paid still reserves for renewal.
- Ordinary-paycheck and annual-average income views, including biweekly versus semimonthly pay.
- Fixed-cost-preserving proportional allocation, all-proportional comparison, and manual allocations.
- Separate optional course reserve within the target, and an explicit warning when fixed costs exceed it.
- Tax cash reserve from user-entered projected total tax, withholding, and paid estimates. Unknown amounts stay unknown.
- Locally imported/exported JSON plans and opt-in browser storage; no analytics or outbound requests.

## Personal data

Public code contains a generic example only. Keep personal JSON plans, statements, tax returns, transaction ledgers, and account information outside the repository. Import a private JSON plan using the page control. Browser storage is local to this origin, not a secure vault or a cross-device sync service.

## Deploy

Keep the `budget/` directory at the Pages publishing root. No dependencies or build step are required. Preserve existing CNAME and Pages settings. The JavaScript modules must be served over HTTP(S).

## Calculation boundaries

Savings are after modeled spending but before unmodeled additional taxes. This is a cash planning tool, not a tax return calculator. Avoid counting internal household transfers, card repayments, or security purchases as consumption. Annual reserves and their eventual payments are the same budget allocation, not two expenses.
