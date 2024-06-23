function transpose(matrix){
    for(let i=0; i<matrix.length; i++){
        for(let j=i; j<matrix[i].length; j++){
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }

    return matrix;
}

console.log(
    transpose(
        [
            [1,2,3], 
            [3,4,3],
            [1,1,1]
        ]
    )
    /* Result : 
        [ 
            [1,3,1],
            [2,4,1],
            [3,3,1]
        ]
    */
);
