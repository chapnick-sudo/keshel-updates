# keshel-updates

Version information used by the **Keshel Clinic** (תיק כשל) offline tool to check for updates.
This repository contains only `version.json` – no code and no medical data.

```json
{"version": "2.0", "date": "…", "notes": "…", "url": "<download folder>"}
```

## odoro-helper/

`odoro-helper/odoro.js` – the bookmarklet version of the Odoro Helper browser tool
(WhatsApp reminder re-send and SMS batch sending inside the Odoro calendar).
It runs only in the user's own browser, inside Odoro, using their existing login.
It contains no patient data and sends nothing anywhere except to Odoro itself.
