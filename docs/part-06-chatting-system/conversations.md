# Having Conversations & Message Tools

The inVAS message composer provides agents with productivity tools designed for fast, accurate communication.

---

## Composer Features

* **Canned Responses (Saved Messages):** Type `/` to quickly open and search pre-written answers for frequently asked questions.
* **Media Upload & Drag-and-Drop:** Paste images directly from the clipboard (`Ctrl + V`) or drag files into the chat area.
* **Interactive Messages:** Send quick buttons, list menus, and WhatsApp Flow forms directly from the attachment menu.
* **Product Catalog Sharing:** Browse connected e-commerce catalog items and send single or multi-product cards with live pricing.
* **Voice Notes:** Record and send audio messages directly through browser microphones.
* **Draft Auto-Saving:** Draft messages are preserved per contact if an agent switches between conversations.

---

## Understanding Message Delivery Statuses

Every outgoing message displays standard WhatsApp delivery ticks:

<div class="doc-image">
  <img src="/images/pdf/page_57_img_1.png" alt="Message Delivery Statuses" />
  <div class="caption">Figure 6.1: Message status indicators (Sent, Delivered, Read, Failed)</div>
</div>

* 🕒 **Clock (Sending):** Message queued locally and uploading to inVAS servers.
* ✓ **Single Grey Tick (Sent):** Accepted by Meta Cloud API servers.
* ✓✓ **Double Grey Ticks (Delivered):** Delivered to the customer's phone.
* ✓✓ **Double Blue Ticks (Read):** Opened and viewed by the recipient.
* ⚠️ **Red Exclamation (Failed):** Delivery failed (e.g., invalid phone number or out-of-window policy violation). Hover over the icon to view the exact error code.
