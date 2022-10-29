// path: ./src/api/restaurant/routes/restaurant.js

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::stripe.stripe', {
  config: {
    find: {
      policies: [
        // point to a registered policy
        'policy-name',

        // point to a registered policy with some custom configuration
        { name: 'policy-name', config: {} }, 
        
        // pass a policy implementation directly
        (policyContext, config, { strapi }) => {
          return true;
        },
      ]
    }
  }
});
 