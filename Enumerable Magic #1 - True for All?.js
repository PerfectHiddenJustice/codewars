function all(arr, fun) {
     if (arr.length === 0) {
          return true
     } else {
          return arr.every((num) => fun(num))
     }
}



