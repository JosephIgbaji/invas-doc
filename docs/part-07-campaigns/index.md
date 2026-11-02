# Campaigns & Mass Broadcasts

The Campaigns module allows businesses to execute targeted WhatsApp broadcast blasts to thousands of opted-in customers simultaneously using approved templates.

---

## 3-Step Campaign Workflow

```
Step 1: Select Components ──> Step 2: Configure Chunking ──> Step 3: Inject Variables
(Template, Phonebook, Number)   (Rate limits & Time delay)     (Excel / Column mapping)
```

<div class="doc-image">
  <img src="/images/pdf/page_61_img_1.png" alt="Campaign Variable Injection" />
  <div class="caption">Figure 7.1: Mapping spreadsheet columns to template placeholders</div>
</div>

---

## Intelligent Chunking

Chunking breaks massive broadcast audiences into controlled batches:
* **Why Chunking Matters:** Protects your number's quality score from sudden spikes in spam reports and prevents API rate limit throttles.
* **Automatic Chunking:** Automatically divides campaigns exceeding 5,000 recipients across multiple delivery windows.
* **Manual Chunking:** Lets marketers configure batch sizes (e.g., 500 messages every 30 minutes) to match support team response bandwidth.

---

## Variable Data Injection

If your chosen template contains variables (`{{1}}`, `{{2}}`), inVAS enables you to upload an Excel file containing individualized data per customer (e.g., customer names, order tracking numbers, and custom coupon codes).
