function yuGiOh(number) {
  let array = [];
  let output;

  for (let i = 1; i <= number; i++) {
    
      if (i % 2 === 0 && i % 3 ===0 && i % 5 === 0) {
        output = "yu-gi-oh";
      } else if (i % 2 === 0 && i % 3 === 0) {
        output = "yu-gi";
      } else if (i % 2 === 0 && i % 5 === 0) {
        output = "yu-oh";
      } else if (i % 3 === 0 && i % 5 === 0) {
        output = "gi-oh";
      } else if (i % 2 === 0 ) {
        output = "yo";
      } else if ( i % 3 === 0 ) {
        output = "gi";
      } else if (i % 5 === 0 ) {
        output = "oh";
      } else {
        output = i;
      }

      array.push(output);
  };

  console.log(array);
  return array;    
};

yoGiOh(100);
yoGiOh(54)
