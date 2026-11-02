# Message Types Overview

The WhatsApp Business Platform provides rich interactive communication channels that far exceed the limits of traditional SMS and email. Messages within inVAS are divided into two primary categories:

```
inVAS WhatsApp Messaging
├── 1. Non-Template Messages (Service Messages)
│   ├── Interactive Types (Buttons, Lists, Flows, Product Catalogs)
│   └── Non-Interactive Media (Text, Images, Video, Audio, Docs, Location)
└── 2. Template Messages (Pre-approved by Meta)
    ├── Marketing Templates
    ├── Utility Templates
    └── Authentication OTP Templates
```

---

## Key Differences

| Attribute | Non-Template (Session) Messages | Template Messages |
| :--- | :--- | :--- |
| **Availability** | Only during active 24-hr Customer Service Window | Anytime (24/7/365) |
| **Meta Approval** | None required | Mandatory pre-approval required |
| **Formatting** | Free-form dynamic text, media, interactive widgets | Strict templates with approved `{{1}}` placeholders |
| **Primary Use** | Ongoing support, agent chat, bot navigation | Re-engagement, marketing broadcasts, alerts, OTPs |
