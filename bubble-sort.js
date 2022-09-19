function bubbleSort(array) {
  /*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
  var noSwaps;
  for (var l = array.length; l > 0; l--) {
    noSwaps = true;
    for (var b = 0; b < l - 1; b++) {
      if (array[b] > array[b + 1]) {
        var temp = array[b];
        array[b] = array[b + 1];
        array[b + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

module.exports = bubbleSort;
