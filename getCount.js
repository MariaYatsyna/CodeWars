function getCount(str) {
    let arr = str.split("");
    let arrVowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for(let i = 0; i <= arr.length; i++){
      if(arrVowels.includes(arr[i])){
        console.log(arr[i]);
        count += 1;
      }
    }
    console.log(count);
  }

  getCount("abraconi");

