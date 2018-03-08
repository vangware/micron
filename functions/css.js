"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Set several styles of an element or a group of elements.
 *
 * @example
 * // <a id="id">Link</a>
 * css(get("#id"), {
 *   fontWeight: 700
 * });
 * // <a id="id" style="font-weight:700">Link</a>
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements to set styles.
 * @param {Object} S List of styles in Object format.
 * @exports css
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with new styles.
 */
exports.css = (E, S) => (E.length ? E : [E]).map(e => (Object.assign(e.style, S), e));