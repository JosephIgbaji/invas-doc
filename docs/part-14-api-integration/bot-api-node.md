# Bot Factory: API Request Node

The **API Request Card** enables visual bots to interact with external backends in real time.

<div class="doc-image">
  <img src="/images/pdf/page_107_img_1.png" alt="Bot API Request Card" />
  <div class="caption">Figure 14.1: API Request node configuration in Bot Factory</div>
</div>

---

## Configuration Fields

1. **HTTP Method:** Select `GET`, `POST`, `PUT`, or `DELETE`.
2. **Endpoint URL:** Target HTTPS URL (e.g., `https://api.mystore.com/orders/lookup`).
3. **Authentication Type:**
   * **None:** Public endpoints.
   * **Basic Auth:** Username and password.
   * **Bearer Token:** Static JWT or token.
   * **Custom Headers:** Custom header keys and values (e.g., `x-api-key`).
4. **Dynamic Variable Replacement:**
   ::: v-pre
   * Inject customer data dynamically into query parameters or JSON body using `{{client.phone}}`, `{{client.name}}`, or previous bot inputs.
   * Example: `https://api.mystore.com/orders?phone={{client.phone}}`.
   :::
