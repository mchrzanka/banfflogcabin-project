"use strict";

/**
 * A set of functions called "actions" for `seed`
 */

module.exports = {
  seedData: async (ctx, next) => {
    try {
      const entry = await strapi.db.query("api::review.review").create({
        data: {
          title: "First review",
          content: "Love this place amazing will for sure stay again",
          reviewer: "Sara M",
          publishedAt: new Date(),
        },
      });

      ctx.body = "Database updated";
    } catch (err) {
      ctx.body = err;
    }
  },
};
