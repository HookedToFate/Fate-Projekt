# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Reporting a Vulnerability

The Fate-Orakel team takes security bugs seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

To report a security issue, please use the GitHub Security Advisory ["Report a Vulnerability"](https://github.com/HookedToFate/Fate-Projekt/security/advisories/new) tab.

The team will send a response indicating the next steps in handling your report. After the initial reply to your report, the security team will keep you informed of the progress towards a fix and full announcement, and may ask for additional information or guidance.

### What to include in your report

Please include the following information in your report:

* Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
* Full paths of source file(s) related to the manifestation of the issue
* The location of the affected source code (tag/branch/commit or direct URL)
* Any special configuration required to reproduce the issue
* Step-by-step instructions to reproduce the issue
* Proof-of-concept or exploit code (if possible)
* Impact of the issue, including how an attacker might exploit the issue

This information will help us triage your report more quickly.

## Preferred Languages

We prefer all communications to be in English or German.

## Security Considerations for Fate-Orakel

Fate-Orakel is a client-side web application that runs entirely in the browser. Key security considerations include:

### Client-Side Security
- All computation happens in the user's browser
- No server-side data storage or processing
- No authentication or user accounts
- No external API calls (except for CDN resources)

### Third-Party Dependencies
- React 17 and React-DOM from unpkg.com CDN
- Tailwind CSS from CDN
- Google Fonts (Inter and Playfair Display)

### Privacy
- No cookies or tracking
- No analytics or telemetry
- No data collection or storage
- All user inputs (questions) remain local to the browser

### Potential Concerns
If you discover any of the following, please report them:
- Cross-site scripting (XSS) vulnerabilities
- Dependencies with known vulnerabilities
- Unintended data leakage or exposure
- Issues with the Content Security Policy
- Any other security concerns

## Disclosure Policy

When the security team receives a security bug report, they will:

1. Confirm the problem and determine the affected versions
2. Audit code to find any potential similar problems
3. Prepare fixes for all supported versions
4. Release new versions and publish a security advisory

## Comments on this Policy

If you have suggestions on how this process could be improved, please submit a pull request or open an issue to discuss.
