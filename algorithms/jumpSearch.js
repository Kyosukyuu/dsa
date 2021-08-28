const jumpSearch = (arr, target) => {
  const arrLen = arr.length;
  const step = Math.floor(Math.sqrt(arrLen));

  if (arr[arrLen - 1] < target) return -1;

  let subsetStart = 0;
  let subsetEnd = step;

  while (arr[Math.min(subsetEnd, arrLen) - 1] < target) {
    console.log(subsetStart, "to", subsetEnd - 1);
    subsetStart = subsetEnd;
    subsetEnd += step;
  }
  console.log(subsetStart, "to", subsetEnd - 1);

  while (arr[subsetStart] < target) {
    subsetStart++;

    if (subsetStart == Math.min(subsetEnd, arrLen)) return -1;
  }

  if (arr[subsetStart] == target) return subsetStart;
  else return -1;
};

// const arr = [1, 3, 5, 8, 10, 14, 23, 37, 40];
const arr = [0];

const res = jumpSearch(arr, 0);
console.log(`INDEX: `, res);
