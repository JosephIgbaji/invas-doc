import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'inVAS Documentation',
  description: 'Enterprise WhatsApp Business API, Bot Factory, Omnichannel Chatting & CRM Documentation',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0052cc' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'inVAS Product Documentation & Manual' }],
    ['meta', { name: 'og:description', content: 'Complete user manual, operational guide, and technical reference for inVAS.' }]
  ],

  themeConfig: {
    siteTitle: 'inVAS Docs',
    logo: {
      light: '/intarvaslogoblue.svg',
      dark: '/intarvaslogowhite.svg',
      alt: 'inVAS Logo'
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/part-01-getting-started/' },
      { text: 'Bot Factory', link: '/part-09-bot-factory/' },
      { text: 'Leads & CRM', link: '/part-10-leads-crm/' },
      { text: 'API Reference', link: '/part-14-api-integration/' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Documentation Home', link: '/' }
        ]
      },
      {
        text: 'Part 1: Getting Started',
        collapsed: false,
        items: [
          { text: '1. Introduction to inVAS', link: '/part-01-getting-started/' },
          { text: '2. Setting Up Your Account', link: '/part-01-getting-started/account-setup' },
          { text: '3. Key Concepts & Messaging Limits', link: '/part-01-getting-started/key-concepts' }
        ]
      },
      {
        text: 'Part 2: Contact Management',
        collapsed: true,
        items: [
          { text: 'Phonebooks & Client Import', link: '/part-02-contact-management/' }
        ]
      },
      {
        text: 'Part 3: Messages',
        collapsed: true,
        items: [
          { text: 'Message Overview', link: '/part-03-messages/' },
          { text: 'Interactive Message Types', link: '/part-03-messages/interactive-messages' },
          { text: 'Non-Interactive Messages', link: '/part-03-messages/non-interactive-messages' }
        ]
      },
      {
        text: 'Part 4: Calls & Telephony',
        collapsed: true,
        items: [
          { text: 'Voice Calling & WebRTC', link: '/part-04-calls/' }
        ]
      },
      {
        text: 'Part 5: WhatsApp Templates',
        collapsed: true,
        items: [
          { text: 'Template Overview', link: '/part-05-templates/' },
          { text: 'Categories, Structure & Variables', link: '/part-05-templates/categories-structure' },
          { text: 'Approval & Quality Ratings', link: '/part-05-templates/approval-quality' },
          { text: 'Template Pricing & Meta Charges', link: '/part-05-templates/pricing' }
        ]
      },
      {
        text: 'Part 6: Chatting System & Inbox',
        collapsed: true,
        items: [
          { text: 'Inbox Overview & Navigation', link: '/part-06-chatting-system/' },
          { text: 'Having Conversations', link: '/part-06-chatting-system/conversations' },
          { text: 'Chat Assignments & Contact Tools', link: '/part-06-chatting-system/assignments-contacts' }
        ]
      },
      {
        text: 'Part 7: Campaigns',
        collapsed: true,
        items: [
          { text: 'Campaign Setup, Chunking & Injection', link: '/part-07-campaigns/' }
        ]
      },
      {
        text: 'Part 8: Scheduled Messages',
        collapsed: true,
        items: [
          { text: 'Automated & Recurring Schedules', link: '/part-08-scheduled-messages/' }
        ]
      },
      {
        text: 'Part 9: Bot Factory',
        collapsed: true,
        items: [
          { text: 'Bot Factory Overview & Architecture', link: '/part-09-bot-factory/' },
          { text: 'Triggers, Frequencies & Canvas', link: '/part-09-bot-factory/triggers-canvas' },
          { text: 'Message Cards (Interactive & Media)', link: '/part-09-bot-factory/message-cards' },
          { text: 'Action Cards & Workflows', link: '/part-09-bot-factory/action-cards' }
        ]
      },
      {
        text: 'Part 10: Lead Management (CRM)',
        collapsed: true,
        items: [
          { text: 'CRM Pipeline & Views', link: '/part-10-leads-crm/' },
          { text: 'Activities, Tags & Lead Import', link: '/part-10-leads-crm/pipeline-activities' }
        ]
      },
      {
        text: 'Part 11: Catalog Management',
        collapsed: true,
        items: [
          { text: 'Connecting Product Catalog', link: '/part-11-catalog-management/' },
          { text: 'Syncing, Products & Variants', link: '/part-11-catalog-management/sync-products' },
          { text: 'Order Management (Premium)', link: '/part-11-catalog-management/orders' }
        ]
      },
      {
        text: 'Part 12: Call Center (Premium)',
        collapsed: true,
        items: [
          { text: 'Call Center Panel, Queues & Logs', link: '/part-12-call-center/' }
        ]
      },
      {
        text: 'Part 13: Team & Access Management',
        collapsed: true,
        items: [
          { text: 'Users, Roles & Permissions', link: '/part-13-team-access/' }
        ]
      },
      {
        text: 'Part 14: Developer API Integration',
        collapsed: true,
        items: [
          { text: 'REST API & Authentication', link: '/part-14-api-integration/' },
          { text: 'Bot API Request Node', link: '/part-14-api-integration/bot-api-node' }
        ]
      },
      {
        text: 'Part 15: Pricing & Billings',
        collapsed: true,
        items: [
          { text: 'Platform Pricing & Meta Markups', link: '/part-15-pricing-billings/' }
        ]
      }
    ],

    outline: {
      level: [2, 3],
      label: 'On This Page'
    },

    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page'
    },

    footer: {
      message: 'inVAS Documentation & User Manual',
      copyright: 'Copyright © 2026 Intarvas Communications. All rights reserved.'
    }
  }
});
