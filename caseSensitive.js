function convertCase(before, after) {
	return before[0] === before[0].toUpperCase() ? 
			after[0].toUpperCase() + after.substring(1) :
			after;
};

function myReplace(str, before, after) {
	let newWord = convertCase(before, after);
	return str.replace(before, newWord);
};

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
