let words = function(letter) {
    const str = letter.split("").sort().join("");
    return str;
  }
  
  console.log(words("webmaster"));