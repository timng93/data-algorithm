const uncommonWordsFromSentences = (A, B) => {
  const resultString = [];

  const wordsFromA = A.split(" ");
  const wordsFromB = B.split(" ");
  console.log(wordsFromA.length);
  console.log(wordsFromB);

  for (let i = 0; i < wordsFromA.length; i++) {
    if (wordsFromA[i] !== wordsFromB[i]) {
      return resultString.push(wordsFromA[i]);
    } else return resultString;
  }
};

console.log(
  uncommonWordsFromSentences("this apple is sweet", "this apple is sour")
);
