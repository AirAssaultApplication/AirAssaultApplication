'use strict';

/**
 * flashcard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flashcard.flashcard');
