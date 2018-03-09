"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a new element.
 *
 * @param {string} t Element tag.
 * @param {Object.<string,any>} [P={}] Element properties.
 * @exports cne
 * @returns {HTMLElement} New element with properties set.
 *
 * @example
 * cne("div"); // Returns <div></div>
 * cne("div", {
 *   width: 100,
 *   height: 100,
 *   style: {
 *     backgroundColor: "#000"
 *   }
 * }); // Returns <div width="100" height="100" style="background-color:#000"></div>
 */
exports.cne = (t, P = {}) => Object.assign(document.createElement(t), P);