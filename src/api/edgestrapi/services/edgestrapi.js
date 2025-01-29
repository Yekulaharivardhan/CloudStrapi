'use strict';

/**
 * edgestrapi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::edgestrapi.edgestrapi');
