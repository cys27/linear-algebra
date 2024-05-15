function transpose(matrix){
    if(!Array.isArray(matrix))
        return false;

    if(matrix.length === 0)
        return false;

    const vectorLengths = [];

    for(const vector of matrix){
        if(!Array.isArray(vector))
            return false;

        
        for(const item of vector){
            if(typeof item !== "number")
                return false;
        }
        
        vectorLengths.push(vector.length);
    }

    if((new Set(vectorLengths)).size !== 1)
        return false;


    const transposeMatrix = [];

    let k=0;
    while(k<matrix[0].length){
        const vect = [];
        for(let i=0; i<matrix.length; i++){
            vect.push(matrix[i][k]);
        }
        transposeMatrix.push(vect);
        k++;
    }

    return transposeMatrix;
}

console.log(
    transpose(
        [
            [1,2,3], 
            [3,4,3]
        ]
    )
    /* Result : 
        [ 
            [ 1, 3 ], 
            [ 2, 4 ], 
            [ 3, 3 ] 
        ]
    */
)
