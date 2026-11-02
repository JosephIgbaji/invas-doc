# Bot Triggers, Frequencies & Connections

Every bot starts with a trigger event that determines when the automated flow activates.

---

## Trigger Types

<div class="doc-image">
  <img src="/images/pdf/page_68_img_1.png" alt="Bot Triggers" />
  <div class="caption">Figure 9.2: Trigger condition settings</div>
</div>

* **Keyword Exact Match:** Triggers only if the user types an exact keyword (e.g., `MENU`, `START`, `PRICING`).
* **Keyword Contains:** Triggers if the customer's message contains specific words anywhere in the text (e.g., *"Where is my order?"*).
* **Any Message (Catch-All):** Triggers on any message sent by the customer. Ideal for welcome greetings or out-of-office automations.

---

## Triggering Frequencies

Controls how often the bot responds to the same user:
* **Every Time:** Bot triggers every time the condition is met.
* **Once Every 24 Hours:** Prevents annoying repeat executions if a user sends multiple messages in a day.
* **Only Once (First Time User):** Perfect for onboarding introductions.

---

## Connecting Cards

<div class="doc-image">
  <img src="/images/pdf/page_70_img_1.png" alt="Connecting Cards" />
  <div class="caption">Figure 9.3: Connecting output edge (circle +) to input edge (green dot)</div>
</div>

* Cards have an **Output Edge** (plus icon on the right) and an **Input Edge** (green circle on the left).
* Drag from an output edge to an input edge to establish the conversational path.
* Button and list cards have individual output edges per button, allowing multi-branch routing based on user choice.
