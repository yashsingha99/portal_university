'use strict';

/**
 * timetable service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::timetable.timetable');
