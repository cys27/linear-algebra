function multiplication(A, B){
    if(!Array.isArray(A) || !Array.isArray(B))
        return false;

    // Hell of Nested Loops
    const lengthOfVectors_A = [];
    for(const vectors of A){
        lengthOfVectors_A.push(vectors.length);

        for(const items of vectors)
            if(typeof items !== "number")
                return false;
    }

    const lengthOfVectors_B = [];
    for(const vectors of B){
        lengthOfVectors_B.push(vectors.length);

        for(const items of vectors)
            if(typeof items !== "number")
                return false;
    }

    if((new Set(lengthOfVectors_A)).size !== 1 || (new Set(lengthOfVectors_B)).size !== 1)
        return false;

    if(A[0].length !== B.length)
        return false;
    
    const TRANSPOSE_B = [];
    let k=0;
    while(k<B[0].length){
        const vect = [];
        for(let i=0; i<B.length; i++)
            vect.push(B[i][k])

        TRANSPOSE_B.push(vect);
        k++;
    }

    const result = [];

    for(let i=0; i<A.length; i++){
        result.push([]);
        for(let j=0; j<TRANSPOSE_B.length; j++){
            result[i].push(A[i].reduce((r, a, m) => r+a*TRANSPOSE_B[j][m], 0));
        }
    }

    return result;
}

console.log(
    multiplication(
        [
            [7,8],[9,10],[11,12]
        ], 
        
        [
            [1,2,3],
            [4,5,6]
        ]
    )
    /*
        Result:
        [ 
            [ 39, 54, 69 ], 
            [ 49, 68, 87 ], 
            [ 59, 82, 105 ] 
        ]
    */
);
