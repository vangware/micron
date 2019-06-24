/**
 * Timestamp string hash generator (up to 8 characters).
 *
 * @param {number} [l=8] Length of the random string (8 max).
 * @exports tsh
 * @returns {string} A timestamp hash.
 * 
 * @example
 * tsh(); // Timestamp hash of 8 characters, like: "km5ztiej".
 * tsh(4); // Timestamp hash of 4 characters, like: "ytbz".
 */
export const tsh=(l=8)=>Date.now().toString(36).split("").reverse().join("").slice(0,l>8?8:l<1?1:l);