# Developer REST API

The inVAS REST API allows developers to integrate WhatsApp messaging, template dispatch, and contact updates directly into their proprietary applications, websites, and ERPs.

---

## Authentication

All API requests must include a JWT Bearer token in the standard HTTP `Authorization` header:

```http
Authorization: Bearer <YOUR_JWT_TOKEN>
Content-Type: application/json
```

::: tip Generating Tokens
Navigate to **Developers** in the upper toolbar of your inVAS console and click **Generate Token**. Store tokens securely in environment variables.
:::

---

## Template Dispatch Endpoint

<span class="http-method http-post">POST</span> `/api/v1/messages/template`

Sends a pre-approved template message to a recipient:

### Request Headers
```http
POST /api/v1/messages/template HTTP/1.1
Host: api.invas.com
Authorization: Bearer eyJhbGciOi...
Content-Type: application/json
```

### Request Payload (JSON)
```json
{
  "business_number": "2348012345678",
  "recipient": "2348099887766",
  "template_name": "order_confirmation_v2",
  "language": "en",
  "components": [
    {
      "type": "body",
      "parameters": [
        {
          "type": "text",
          "text": "Alexander"
        },
        {
          "type": "text",
          "text": "INV-98231"
        }
      ]
    }
  ]
}
```

### Response Payload (200 OK)
```json
{
  "success": true,
  "message_id": "wamid.HBgLMjM0ODA...==",
  "status": "queued",
  "timestamp": 1740000000
}
```
