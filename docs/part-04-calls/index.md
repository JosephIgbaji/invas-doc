# Voice Calling & Telephony

inVAS provides native integration with **WhatsApp Voice Calling**, allowing businesses to place and receive WebRTC voice calls directly through their verified WhatsApp Business numbers.

<div class="doc-image">
  <img src="/images/pdf/page_27_img_1.png" alt="Enable Calling Feature" />
  <div class="caption">Figure 4.1: Enabling the WhatsApp Voice Calling feature</div>
</div>

---

## Prerequisites for Calling

To use WhatsApp Voice Calling in inVAS:
1. The business number must be verified on the Cloud API.
2. WebRTC audio permissions must be granted in your browser.
3. Calling must be toggled **ON** in the business number details panel.

---

## Calling Settings

In the **Calling Settings** modal, administrators can configure:
* **Call Icon Visibility:** Control whether the voice call button is displayed on the customer's WhatsApp profile.
* **Callback Permission:** Require clients to grant explicit permission before your business can initiate an outbound call.
* **Call Hours:** Define operating hours so incoming calls outside office hours are greeted with an automated voicemail message.
* **Call Recording:** Automatically record all incoming and outgoing voice calls (stored securely for quality and compliance in the Call Center repository).

<div class="doc-image">
  <img src="/images/pdf/page_28_img_1.png" alt="Call Recording Settings" />
  <div class="caption">Figure 4.2: Configuring automatic call recording and legal hold</div>
</div>

---

## Call Reception & Management

When calling is active, a persistent **Floating Call Manager** panel appears in the inVAS agent interface:

<div class="doc-image">
  <img src="/images/pdf/page_29_img_1.png" alt="Call Manager Banner" />
  <div class="caption">Figure 4.3: Floating Call Manager banner with live calls</div>
</div>

* **Inbound Calls (Client-Initiated):**
  * When a customer calls, the floating panel rings with caller ID information.
  * Accepting the call connects WebRTC audio directly inside the browser.
  * **Important:** Inbound WhatsApp calls are completely free of Meta telecommunications charges and automatically refresh the 24-hour Customer Service Window.
* **Outbound Calls (Business-Initiated):**
  * Agents can initiate calls from the chat thread or CRM lead card.
  * The call progresses through two states: **Calling** (server connection) and **Ringing** (client device alerting).

---

## Calling Pricing Mechanism (Pulses)

Outbound WhatsApp calls are billed in **pulses** of 6 seconds:

$$\text{Total Pulses} = \left\lceil \frac{\text{Call Duration in Seconds}}{6} \right\rceil$$

* For example, a 56-second call equals $\lceil 56/6 \rceil = 10$ pulses.
* Pulse rates depend on the destination country code.

---

## Simultaneous Calls Policy

WhatsApp business accounts maintain concurrency boundaries based on plan tier. In standard tiers, if an active call is ongoing on a business number, additional incoming callers will receive a busy signal until the line clears, or they can be queued when using the inVAS Call Center module.
