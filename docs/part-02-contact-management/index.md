# Contact Management & Phonebooks

Contact management in inVAS provides central storage, audience segmentation, and deduplication for all customers communicating with your business.

<div class="doc-image">
  <img src="/images/pdf/page_17_img_1.png" alt="Phonebooks Dashboard" />
  <div class="caption">Figure 2.1: inVAS Phonebooks Overview</div>
</div>

---

## What Are Phonebooks?

A **Phonebook** is a curated list of contacts grouped together for targeted marketing campaigns, departmental routing, or scheduled broadcasts:
* Contacts in phonebooks include their full international phone number (with country code), name, email, custom variables, and activity logs.
* A single contact can belong to multiple phonebooks (e.g., *VIP Customers*, *Black Friday Leads*, *Product Beta Users*).

---

## Duplicate Handling

inVAS enforces telephone number uniqueness:
* The primary key for every client record is their **E.164 formatted phone number** (e.g., `+14155552671`, `+2348012345678`).
* If you import a contact that already exists in the system, inVAS intelligently updates the existing record with any new attribute data instead of generating redundant duplicate entries.

---

## System Phonebooks

Certain phonebooks are automatically created and maintained by the inVAS platform:
* **All Contacts:** Global registry of every user who has ever messaged or been messaged by your business.
* **Bot Captured Leads:** Contacts populated dynamically when users reach an *Add to Phonebook* card in Bot Factory.
* **Opt-Out / Unsubscribed:** Contacts who clicked an unsubscribe button or sent stop keywords.

::: note Read-Only Attributes
System phonebooks cannot be manually deleted or renamed because core platform automations rely on their system IDs.
:::

---

## Importing Contacts

<div class="doc-image">
  <img src="/images/pdf/page_18_img_1.png" alt="Contact Import Review Table" />
  <div class="caption">Figure 2.2: Reviewing imported contacts with validation highlights</div>
</div>

### 1. Bulk Import via Excel / CSV
To import thousands of contacts at once:
1. Navigate to **Contacts** > **Phonebooks** > select target phonebook > click **Import Contacts**.
2. Download the official **Import Template (.xlsx / .csv)**.
3. Prepare your spreadsheet with columns:
   * `phone` *(Required)*: Country code + phone number without spaces or plus signs (e.g., `2348012345678`).
   * `name` *(Optional)*: Contact full name.
   * `email` *(Optional)*: Contact email address.
   * `var1`, `var2`, `var3` *(Optional)*: Custom attributes for dynamic template injection.
4. Upload the file. The validation engine will scan each row:
   * **Valid rows** appear in normal styling.
   * **Malformed rows** (e.g., invalid phone format or missing country code) are **highlighted in red** with specific error diagnostics.
5. Click **Confirm Import**.

### 2. Manual Single Insertion
Click **Add Contact**, specify the customer name, phone number, and optional attributes, then assign them directly to one or more phonebooks.

### 3. Automatic Client Insertion
Whenever a new user messages your WhatsApp Business number for the first time, inVAS automatically creates a contact record, captures their WhatsApp display name, and places them in the central directory.
