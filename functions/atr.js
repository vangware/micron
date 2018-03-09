"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* TypeScript patch (It doesn't infer from JSDocs). */
let atr;
exports.atr = atr;
/**
 * Set several attributes of an element or a group of elements.
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements with event.
 * @param {Object.<string,any>} A List of attributes in Object format.
 * @exports atr
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with new attributes.
 *
 * @example
 * // <a id="id">Link</a>
 * atr(get("#id"), {
 *   class: "a-class"
 * });
 * // <a id="id" class="a-class">Link</a>
 */
exports.atr = atr = (E, A) => (Array.isArray(E) ? E : [E]).map(e => Object.keys(A).map(a => (e.setAttribute(a, A[a]), e))[0]);
