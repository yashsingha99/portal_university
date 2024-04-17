'use strict';

/**
 * email controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::email.email');

// File: api/email/controllers/email.js

// 'use strict';

// const { sanitizeEntity } = require('strapi-utils');

// module.exports = {
//   async send(ctx) {
//     const { recipient, subject, message } = ctx.request.body;

//     // Send email using Strapi email plugin
//     await strapi.plugins['email'].services.email.send({
//       to: recipient,
//       subject: subject,
//       text: message,
//     });

    // Return success response
//     return ctx.send({ message: 'Email sent successfully' });
//   },
// };
