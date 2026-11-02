# Setting Up Your Account & Business Numbers

Connecting your WhatsApp Business number to inVAS is handled through the official **Meta Embedded Signup flow**, ensuring instant verification and cloud hosting.

---

## Step-by-Step Meta Onboarding

Follow these steps to connect your business phone number:

1. **Log in to inVAS** and navigate to the **Business Numbers** section in the administration dashboard.
2. Click **Connect WhatsApp Number** (or *Add Business Number*). This launches the official Meta Business signup dialog.
3. **Log in with Facebook:** Use the administrator account of your company's Meta Business Portfolio.

<div class="doc-image">
  <img src="/images/pdf/page_8_img_2.png" alt="Meta Embedded Onboarding Dialog" />
  <div class="caption">Figure 1.1: Meta Embedded Signup Authentication Screen</div>
</div>

4. **Select Business Portfolio:** Select your verified Meta Business Portfolio from the list of available assets.

<div class="doc-image">
  <img src="/images/pdf/page_9_img_1.png" alt="Select Business Portfolio" />
  <div class="caption">Figure 1.2: Selecting the Meta Business Portfolio</div>
</div>

5. **Choose WhatsApp Business Account (WABA):**
   * *Create New:* Set up a brand new WABA directly within the modal.
   * *Select Existing:* Choose an existing WABA already registered under your business portfolio.
   * *Migrate Number:* Connect an existing WhatsApp Business app number.

<div class="doc-image">
  <img src="/images/pdf/page_10_img_1.png" alt="Select or Create WhatsApp Business Account" />
  <div class="caption">Figure 1.3: Creating or choosing an existing WhatsApp Business Account</div>
</div>

6. **Verify Phone Number:**
   * Enter your business phone number and select your verification method (**SMS** or **Voice Call**).
   * Enter the 6-digit verification code received.

<div class="doc-image">
  <img src="/images/pdf/page_11_img_2.png" alt="Phone Number Verification" />
  <div class="caption">Figure 1.4: Entering phone number verification code</div>
</div>

7. **Grant Permissions:** Confirm the permissions allowing inVAS to manage message templates, send/receive messages, and handle webhooks.
8. **Finish Onboarding:** Click **Finish**. The modal closes, and your number appears in the inVAS dashboard with the status badge set to **Configured**.

---

## Checking Onboarding & Health Status

Once connected, your business number card displays real-time health metrics:

* **Connection Status:** Displays **Connected** when webhooks and Cloud API tokens are healthy.
* **Quality Rating:** Indicates customer sentiment according to Meta (Green / High, Yellow / Medium, Red / Low).
* **Messaging Tier Limit:** Shows current tier capacity (e.g., Tier 1K, 10K, 100K, or Unlimited unique recipients per 24 hours).

---

## Adding Additional Business Numbers

inVAS supports multi-number orchestration within a single tenant account:
* You can connect multiple business numbers to separate brands, departments (e.g., Sales vs. Support), or regional offices.
* New numbers can belong to the same WhatsApp Business Account (WABA) or a different portfolio.
* In the team inbox, agents can filter conversations or switch outbound sender IDs per number seamlessly.
