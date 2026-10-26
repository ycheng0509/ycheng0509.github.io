# Monthly budget and spending history

Static GitHub Pages application at /budget/. No build step or external dependencies.

Budget view: fixed monthly expenses are read-only. Pet insurance has no monthly reserve; a single reminder says it is generally charged annually in the October statement. Ordinary categories remain editable and can be allocated proportionally within a monthly cap. Changes stay in browser-local storage. The v3 key migrates valid v2 daily amounts without deleting previous data, so removing the insurance reserve can leave an explicitly unallocated amount until the user redistributes it.

History view: monthly and statement-period net spending, category drill-down, and a monthly summary table. Only aggregated data from the provided Robinhood statements is published. No transaction references, merchants, account identifiers, statements, tax returns, income figures or private profile are bundled.

History is not complete household spending. It excludes direct-bank rent, loans, FSD, internet, other-card transactions and unmatched course fees. Calendar months use posting dates; April and October are marked partial and excluded from the complete-month average. Gross charges minus refunds reconcile to net spending. Already-paid October pet insurance remains in actual history even though the forward-looking monthly reserve was removed.

Source aggregation is built from the locally reconciled ledger. history-data.mjs includes integer cents, period completeness, and grouped category totals. Raw input files remain outside the repository.
