module.exports = function reverse(n) {
    let mod = Math.abs(n);
    let str = String(mod);
    let rev = str.split("").reverse().join("");
    return Number(rev);
};
