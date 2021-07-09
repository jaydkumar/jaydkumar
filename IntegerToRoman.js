var intToRoman = function(num) {
    const map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    
    let result = '';

    while (num > 0) {
        for (let keys in map) {
            if (map[keys] <= num) {
                result += keys;
                num -= map[keys];
                break;
            }
        }
    }

    return result;
};