function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */

	let a = array.length;



	 for (let l = 0; l < a ;l++){
		 let lowest = l;
   
		 for (let b = l + 1; b < a;b++) {
         if (array[b] < array[lowest]) {
          lowest = b;


		 }


		 }

     if (lowest != l){
      
	;[array[l], array[lowest]]= [array[lowest], array[l]]
       }
	 }

	 return array;
}
module.exports = selectionSort;
