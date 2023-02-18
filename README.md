This package will be used for some util functions I reuse in many projects. 

# Functions

## Strings

    - truncate(str: string, maxLength: number, suffix: string)
    - truncateMiddle(str: string, maxLength: number, suffix: string)

## Numbers
    - formatNumberToK(num: number, precision: number = 1, replaces: string[] = ['K', 'M', 'B', 'T'])
    - formatNumberCommas(num: any)
    - padLeadingZeros(num: any, finalLength: number)

## Web3

    - getAddresses(text: string) -> Returns a list of addresses detected in a given string
    - address(addr: string) -> Returns checksumed address