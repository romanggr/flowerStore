
export function firstLetterToUpperCase(string: string) {
    let res = string[0].toUpperCase()
    res = res + string.slice(1)

    return res;
}