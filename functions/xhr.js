"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Alias for new XMLHttpRequest, with GET method by default.
 *
 * @example
 * xhr("/api").send(); // Sends request to /api
 *
 * @param {string} u URL.
 * @param {string} [m=GET] Method.
 * @exports xhr
 * @returns {XMLHttpRequest} The opened XML HTTP Request.
 */
exports.xhr = (u, m = "GET") => { let x = new XMLHttpRequest; return x.open(m, u), x; };