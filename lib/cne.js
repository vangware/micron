// FIXME: jsdoc-to-md doesn't support this kind of typing for the return: {(HTMLElementTagNameMap[TagType] | HTMLElement)[]}

/**
 * Creates a new element.
 * 
 * @template {keyof HTMLElementTagNameMap} TagType
 * @param {TagType | string} t Element tag.
 * @param {Object.<string, string>} [P={}] Element properties.
 * @exports cne
 * @returns {HTMLElement[]} New element with properties set.
 *
 * @example
 * cne("div"); // Returns <div></div>
 * cne("div", {
 *   width: "100",
 *   height: "100",
 *   style: {
 *     backgroundColor: "#000"
 *   }
 * }); // Returns <div width="100" height="100" style="background-color:#000"></div>
 */
export const cne=(t,P={})=>[Object.assign(document.createElement(t),P)];