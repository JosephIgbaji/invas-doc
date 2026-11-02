# Key Concepts & WhatsApp Rules

To successfully operate on the WhatsApp Business Platform, administrators and agents must understand Meta's messaging policies, customer service windows, and rate tiers.

---

## 1. The 24-Hour Customer Service Window (CSW)

WhatsApp enforces a strict privacy and anti-spam rule known as the **Customer Service Window**:

* **Trigger:** Whenever a customer sends a message or calls your business number, a **24-hour countdown timer** begins.
* **During the Active 24-Hour Window:**
  * Your business can send **any message type** (free-form text, images, videos, audio notes, interactive buttons, list menus, or product cards).
  * These messages are called **Session Messages (Non-template Messages)** and are not subject to per-message template fees.
* **When the Window Expires:**
  * The countdown reaches `00:00:00`.
  * The free-form text input in the agent inbox is disabled.
  * Your business **can only send pre-approved WhatsApp Templates** to re-engage the customer.
  * Once the customer replies to the template, a fresh 24-hour Customer Service Window opens immediately.

::: warning Session Expiry Rule
Never attempt to re-open a conversation after 24 hours using free-form text. You must select an **Approved Template Message** to deliver the update or re-open the dialogue.
:::

---

## 2. Messaging Limits & Automatic Scaling

Messaging limits determine how many **unique customer phone numbers** your business can initiate conversations with in a rolling 24-hour period (inbound customer-initiated chats do not count toward this limit).

| Tier | Unique Recipients / 24 Hours | Requirements |
| :--- | :--- | :--- |
| **Unverified / Sandbox** | 250 recipients | New unverified business account |
| **Tier 1** | 1,000 recipients | Standard tier after phone verification |
| **Tier 2** | 10,000 recipients | Good quality score + sending at 50%+ of Tier 1 capacity |
| **Tier 3** | 100,000 recipients | Good quality score + sending at 50%+ of Tier 2 capacity |
| **Tier 4** | **Unlimited** recipients | Enterprise volume with sustained High quality score |

### Automatic Tier Scaling
Meta automatically scales your tier if:
1. Your quality rating remains **Medium (Yellow)** or **High (Green)**.
2. In the past 7 days, the cumulative number of unique users messaged equals or exceeds 50% of your current tier limit.

---

## 3. What Are Bot Sessions?

A **Bot Session** represents a continuous automated interaction between a customer and an active inVAS Bot Factory flow:
* A session initiates when a user sends a message that matches an active bot trigger keyword or default rule.
* The session stays active while the user navigates cards, clicks buttons, or responds to inputs.
* The session terminates when the flow finishes, an agent takes over the chat, or the user is idle past the configured session timeout.

---

## 4. WhatsApp Templates and Meta Approval

Unlike standard SMS or email where any text can be broadcast, WhatsApp requires that any business-initiated broadcast or message outside the 24-hour window be submitted to Meta for validation.
* Templates are categorized as **Marketing**, **Utility**, or **Authentication**.
* Meta checks templates using AI and human evaluators to prevent spam, abusive content, and improper category tags.
