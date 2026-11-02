# Template Categories, Structure & Variables

Every template created in inVAS belongs to one of three official Meta categories:

---

## 1. Template Categories

<div class="doc-image">
  <img src="/images/pdf/page_34_img_1.png" alt="Marketing Templates" />
  <div class="caption">Figure 5.1: Marketing template configuration preview</div>
</div>

### a. Marketing Templates
Used to promote products, announce sales offers, re-engage dormant customers, or invite users to webinars. Includes discounts, newsletters, and promotional announcements.

### b. Utility Templates
Directly related to an existing transaction or agreed customer action:
* Order confirmations and shipping tracking updates.
* Account balance alerts and billing receipts.
* Appointment reminders and service confirmations.

### c. Authentication Templates
Used strictly for identity verification and account security:
* One-Time Passwords (OTPs).
* Two-factor authentication codes.
* Password reset confirmation codes with optional one-tap autofill buttons.

<div class="doc-image">
  <img src="/images/pdf/page_35_img_1.png" alt="Authentication Templates" />
  <div class="caption">Figure 5.2: OTP authentication template with copy button</div>
</div>

---

## 2. Template Structure

A WhatsApp message template consists of four modular building blocks:

```
[ HEADER ]      Optional: Text (up to 60 chars) OR Media (Image, Video, Document)
[  BODY  ]      Mandatory: Text (up to 1,024 chars) containing variables {{1}}, {{2}}
[ FOOTER ]      Optional: Muted small text (up to 60 chars), often used for opt-out info
[ BUTTONS]      Optional: Up to 3 Quick Replies OR up to 2 Call-to-Action (URL/Phone)
```

---

## 3. Dynamic Variables (Placeholders)

Variables allow a single approved template to be personalized for thousands of unique recipients:
* Represented as `{{1}}`, `{{2}}`, `{{3}}` sequentially.
* Must not appear consecutively (e.g., `{{1}} {{2}}` is rejected; use `{{1}}, your order {{2}} is ready`).
* Samples must be provided during submission so Meta evaluators understand what data will fill the placeholder.

<div class="doc-image">
  <img src="/images/pdf/page_40_img_1.png" alt="Dynamic Variable Replacement" />
  <div class="caption">Figure 5.3: Single template rendered dynamically for two different clients</div>
</div>
