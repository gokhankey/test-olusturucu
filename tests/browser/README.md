# Browser Regression Checks

Serve the repository root with a static server, then open
`/tests/browser/verification.html` and press **Run regression checks**.

The checks use a separate iframe and synthetic PNG/PDF fixtures. They cover image
and PDF cropping, crop edits, coordinate mapping, optional answers, section
numbering, spacing overrides, booklet ordering, measured pagination, PDF page
counts and dimensions, visible PDF pixels, and text/image watermarks.

No accounts or external services are used. The fixtures do not contain user data.
The test reports individual checks and displays the first exported PDF page.
