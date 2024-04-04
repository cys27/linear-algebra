// Hill 2

const A = [[0, 1], [2, 3]];
const chars = {
    0: "Z",
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y"
}

const cipher = str => {
    // Check type and length of str.
    if (typeof str !== "string" || str.length === 0)
        return false;
    
    // Remove whitespaces from str.
    str = str.replace(/ /g, "");

    // If str contains lowercase letter, convert it to uppercase. 
    str = str.toUpperCase();

    // If str contains non-letter character, return false
    const isValid = str.match(/[^a-zA-Z]/g) || true;
    if(isValid !== true)
        return false;

    // Letters index by chars object.
    const letterIndexes = [];
    for(let i=0; i<str.length; i++){
        letterIndexes.push(Object.keys(chars).find(key => chars[key] === str[i]));
    }

    // If length of str is not a multiple of two, add latest letter in str to str.
    if(letterIndexes.length % 2 !== 0){
        letterIndexes.push(letterIndexes[letterIndexes.length - 1]);
    }

    /* 
        Split the array (letterIndexes) into parts.

        letterIndexes = [1,2,3,4,5,6]
        pN = [ [1,2], [3,4], [5,6] ] .....(example 1)
    
        pN contains p1, p2, p3, ... ,pN matrices
        p1 = [1,2] according to example (1)
    */
    const pN = [];
    for(let i=0; i<letterIndexes.length; i+=2){
        pN.push([letterIndexes.slice(i, i+2)]);
    }

    // 2x2 and 2x1 Matrix Multiplacition
    const matrixMultipResult = [];
    const multiplication = (pN) => {
        for(let i=0; i<A.length; i++)
            // A x pN (Matrix Multiplication)
            matrixMultipResult.push(A[i][0] * pN[0][0] + A[i][1] * pN[0][1]);
    }
    // Multiply A with every pN matrix.
    for(let i=0; i<pN.length; i++){
        multiplication(pN[i]);
    }

    // Encrypted version
    let result = "";
    for(let i=0; i<matrixMultipResult.length; i++){
        /* 
            If item of matrixMultipResult bigger than 25, find its mod with 26 and change them.

            matrixMultipResult = [ 13, 9, ..., 42, ..., 23 ]
            + 42 bigger than 25
            + 42 = 16 (mod 26)
            + Change

            matrixMultipResult = [ 13, 9, ..., 16, ..., 23 ]
        */
        if(matrixMultipResult[i] > 25){
            matrixMultipResult[i] = matrixMultipResult[i] % 26;
        }
        result += chars[matrixMultipResult[i]];
    }
    return result;
}

// console.log(
//     cipher("hello world")
//     Output: EELHWURFDJ
// )
