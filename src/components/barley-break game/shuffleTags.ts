function createMatrix(n: number): [][] {
  let matrix = Array(n).fill(Array(n).fill(0));
  // eslint-disable-next-line max-len
  matrix = matrix.map((array: [], i: number) => array.map((el: any, j: number) => ((i === j && i === n - 1) ? el : i * n + j + 1)));
  return matrix;
}

export default function shuffleTags(n = 4): [][] {
  const matrix = createMatrix(n);
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const randomI = Math.floor(Math.random() * n);
      const randomJ = Math.floor(Math.random() * n);
      const temp = matrix[i][j];
      matrix[i][j] = matrix[randomI][randomJ];
      matrix[randomI][randomJ] = temp;
    }
  }
  return matrix;
}
