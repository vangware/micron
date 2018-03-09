/* TypeScript patch (It doesn't infer from JSDocs). */
let css:(E:HTMLElement|HTMLElement[],S:{[styleProperty:string]:any})=>HTMLElement[];

/**
 * Set several styles of an element or a group of elements.
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements to set styles.
 * @param {Object.<string,any>} S List of styles in Object format.
 * @exports css
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with new styles.
 *
 * @example
 * // <a id="id">Link</a>
 * css(get("#id"), {
 *   fontWeight: 700
 * });
 * // <a id="id" style="font-weight:700">Link</a>
 */
css=(E,S)=>(Array.isArray(E)?E:[E]).map(e=>(Object.assign(e.style,S),e));

export { css };
