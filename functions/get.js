"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Alias for querySelectorAll in an array.
 *
 * @example
 * // <a id="id">Link</a>
 * get("#id"); // Above element gets returned
 *
 * @param {string} q CSS Query.
 * @param {HTMLElement} [e=document] Base element.
 * @exports get
 * @returns {HTMLElement[]} Array of elements.
 */
exports.get = (q, e = document) => Array.from(e.querySelectorAll(q));