"use strict";

/**
 * review router
 */
//core router
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::review.review");
