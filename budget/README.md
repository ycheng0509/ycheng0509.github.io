# Monthly budgeting and two-card history

Static GitHub Pages application at /budget/. No build step or external dependencies.

Budget: fixed obligations and confirmed annual reserves are read-only. Pet insurance has a single October annual-payment reminder, with no monthly reserve. Phone service is provisionally budgeted at the most recent US Mobile charge, not a claim about the contract. Card annual fee is reserved over 12 months. One-click allocation keeps groceries at $900 and dining (including self-paid workplace meals) at $1,300, also reserves $500 for pet care, $150 for personal medical costs, $100 for utilities/buffer and $60 for subscriptions/learning, then distributes the remaining available budget using both cards' May-September proportions. These are editable planning choices, not extracted minimum costs or medical care limits.

On upgrade from v4/v3/v2, preserve the user's target and rebuild the daily allocation for the updated source scope. Prior storage keys remain untouched. Thereafter v5 manual adjustments are retained.

History: default to combined Robinhood + Chase 3333, with per-card filtering and stacked monthly bars. Common complete months are May-September. Chase CSV has posting dates but no statement-cycle cutoffs, so statement mode is only enabled for Robinhood. March/April combined coverage and October ending dates are explicitly incomplete. Repayments are excluded, refunds reduce spending, and original October pet insurance remains an actual historical expense.

Only monthly/category aggregates are published. Statements, CSV transaction descriptions, bank identifiers, tax returns, income figures and private profiles stay out of the repository. Direct-bank expenses and other small cards are not included in the credit-card chart.

Published analysis is available as ANALYSIS.md and the rendered /budget/analysis/ page. It documents source coverage, payment/refund reconciliation, category assumptions and the v5 budget. No personal tax or income files are published.
