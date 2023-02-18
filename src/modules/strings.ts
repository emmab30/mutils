/*
*/
export function truncate(str: string, maxLength: number, suffix: string): string {
    if(!str || !str.length) throw new Error(`Provide a valid string`);
    if(str?.length <= maxLength) return str;
    return str.substring(0, maxLength) + suffix;
}

export function truncateMiddle(str: string, maxLength: number, suffix: string): string {
    if(!str || !str.length) throw new Error(`Provide a valid string`);
    if(str?.length <= maxLength) return str;
    return str.substring(0, maxLength/2) + suffix + str.substring(str.length - maxLength/2, str.length);
}