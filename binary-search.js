function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
  
	 let s = 0;
	 let e = array.length - 1; 
      
	 while (s <= e) {
      let m = Math.floor((s + e) / 2);
	  
	  if (array[m] === searchTerm) {
		  
		return m;
	  }  else if (array[m] < searchTerm ) {
          
		s = m + 1;
	  } else {

        e = m - 1;
	  }
	}

	return null;
}

module.exports = binarySearch;
