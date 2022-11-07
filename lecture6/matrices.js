matrix1 = [[1, 3, 4],
           [5, -2, 3]]

matrix2 = [[1, 3, 2],
           [2, 1, 3],
           [0, -1, 1]]

function multiplicationOfMatrices(matrix1, matrix2) {
    const resultMatrixRows = matrix1.length;

    const columnNumbers1 = matrix1[0].length;

    const columnNumbers2 = matrix2[0].length;

    if (columnNumbers1 !== matrix2.length) {
        console.log(`The multiplication of Matrices is unavailable as the number of columns in the first Matrix 
        (№ of columns: ${columnNumbers1}) is not equal to number of rows in the second Matrix
        (№ of rows: ${columnNumbers2}).`)
    }

    let productRow = Array.apply(null, new
    Array(columnNumbers2)).map(Number.prototype.valueOf, 0);

    let resultMatrix = new Array(resultMatrixRows);

    for (let p = 0; p < resultMatrixRows; p++) {
        resultMatrix[p] = productRow.slice();
    }

    for (let i = 0; i < resultMatrixRows; i++) {
        for (let j = 0; j < columnNumbers2; j++) {
            for (let k = 0; k < columnNumbers1; k++) {
                resultMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    console.log(resultMatrix)
}

multiplicationOfMatrices(matrix1, matrix2)
