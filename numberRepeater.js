const repeatNumbers = function(data) {
  let result = '';
  for (let n = 0; n < data.length; n++){
    if (n != 0){
      result += ', '
    }
    for (let i = 0; i < data[n][1]; i++ ){
      result += data[n][0];
    }
  }
    return result
  };
  
  console.log(repeatNumbers([[1, 10]])); // 1111111111
  console.log(repeatNumbers([[1, 2], [2, 3]])); // 11, 222
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); // 10101010, 343434343434, 9292  
  