const subtractMatrix = equation => {
    equation = equation.replace(/ /g, "");
    const matrices = equation.split("+-").map(matrix => JSON.parse(matrix));;

    const matrixLength = [], vectorLength = [], typeofVectorItems = [];
    for (const matrix of matrices) {
        matrixLength.push(matrix.length);
        if ((new Set(matrixLength)).size !== 1) return false;

        for (const vector of matrix) {
            vectorLength.push(vector.length);
            if ((new Set(vectorLength)).size !== 1) return false;

            vector.map(n => {
                typeofVectorItems.push(typeof n);
            });
        }
    }

    for (const types of typeofVectorItems) {
        if (types !== "number") return false;
    }
    for (let i = 1; i < matrices.length; i++) {
        for (let j = 0; j < matrices[i].length; j++) {
            matrices[i][j] = matrices[i][j].map(n => -1 * n)
        }
    }
    const result = [];
    for (let i = 0; i < matrixLength[0]; i++) {
        result.push([]);
    }

    for (const matrix of matrices) {
        for (let i = 0; i < matrix.length; i++) {
            result[i].push(matrix[i])
        }
    }
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].reduce((a, b) => a.map((c, d) => b[d] + c), new Array(result[i][0].length).fill(0));
    }

    return result;
}

/*
    subtractMatrix("[[3,4,6], [6,8,10], [12,14,16]] +- [[1,2,3], [3,4,5], [6,7,8]] +- [[1,2,3], [3,4,5], [6,7,8]]")
*/
