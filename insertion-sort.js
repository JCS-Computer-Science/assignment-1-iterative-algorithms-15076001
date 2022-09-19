function insertionSort(array) {
	 /*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	
	 for( let l=0; l< array.length; l++){
    checkAndSwap(l,array)
	 }
   return array;
	}

function checkAndSwap(l,array){
if(array[l] < array[l-1]) {
[array[l-1], array[l]] = [array[l],array[l-1]]
checkAndSwap([l-1],array)


  }

}

module.exports = insertionSort;
