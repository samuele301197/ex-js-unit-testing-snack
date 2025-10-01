function average(array) {
  const somma = array.reduce((acc, curr) => acc + curr, 0);
  const media = somma / array.length;
  return media;
}

average([2, 4, 6, 8, 10]);
module.exports = average;
