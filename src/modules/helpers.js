export const firstLetterCase = (str) => {
    return (str.charAt(0).toUpperCase() + str.slice(1));
}

export const splitTypeArray = (arr) => {
    return arr.join(" and ");
}