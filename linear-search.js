function linearSearch(array, searchTerm) {
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */


for(let l=0; l< array.length; l++) {
if(array[l] === searchTerm){
return l
}
}

return null;
}

module.exports = linearSearch;
