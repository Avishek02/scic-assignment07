function capitalizeWords(str) {
  let words = str.split(" ");
  let capitalizedArray = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized = word[0].toUpperCase() + word.slice(1);
    capitalizedArray.push(capitalized);
  }

  return capitalizedArray.join(" ");
}

console.log(capitalizeWords("hello world"));