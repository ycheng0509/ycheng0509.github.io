# Simple monthly budget

Budgeting only. Fixed monthly obligations and insurance-renewal reserves are intentionally preset and read-only at the user's request. All other categories are editable, with one button to split the remaining monthly cap according to the current spending proportions.

No income, tax, account connections, imports, exports or financial statements are included. Insurance shown as a monthly reserve is not a second payment of the already-paid policy. Edits use a separate browser-local storage key; the previous complex calculator state is not loaded or deleted.

Rent is a planning reserve of $3,950. Car insurance is a provisional reserve based on historical spending until the coverage period is confirmed. The policy renewal and variable medical budgets are planning amounts, not guaranteed future charges or limits on necessary care.

Static GitHub Pages application, served from /budget/. No build step or external dependencies. Edit engine.mjs to update preset fixed amounts; keep the fixedCents and allocation tests passing.
