/*
 *   Format number to use:
 *   k for thousands,
 *   m for millions,
 *   b for billions,
 *   t for trillions
 *   @param num Number to format
 *   @param replaces Array of strings to replace the default ones (k, m, b, t). It must have 4 elements.
 */
export function formatNumberToK(num: number, precision: number = 1, replaces: string[] = ['K', 'M', 'B', 'T']): string {
    if (replaces && replaces.length !== 4) throw new Error(`Replacements should be an array of length: 4`);

    if (num >= 1000000000000) {
        return (num / 1000000000000).toFixed(precision).replace(/\.0$/, '') + replaces[3];
    }
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(precision).replace(/\.0$/, '') + replaces[2];
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(precision).replace(/\.0$/, '') + replaces[1];
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(precision).replace(/\.0$/, '') + replaces[0];
    }
    return num.toString();
}

/*
 *   Format a number with commas format
 *   @param number to be formatted
 *   Example: 1000000 => 1,000,000
 */
export const formatNumberCommas = (x: any) => {
    if (!x) return x;
    // Check if it's less than 0
    if (parseFloat(x.toString().split(',').join('')) <= 1) return x;
    if (parseFloat(x.toString()) > 200) x = parseFloat(x).toFixed(0);

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/*
 *   Pad a number adding leading zeros
 *   @param number to format with leading zeros
 *   @param length number of final string length (after adding zeros to the left)
 *   Example: number = 5 and size = 2 should return 05.
 *   Example 2: number = 5 and size = 3 should return 005
 */
export const padLeadingZeros = (num: any, finalLength: number) => {
    let s: any = `${num}`;
    while (s.length < finalLength) s = `0${s}`;
    return s;
};
