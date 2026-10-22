//  Exercise 1
function extractNumbers(arr) {
	if (!Array.isArray(arr)) {
		throw new TypeError("Input must be an array");
	}

	return arr.filter((value) => typeof value === "number" && !Number.isNaN(value));
}
//  Exercise 2
//  Exercise 2 b
// function sumNumbersSafe(arr) {
// 	let sum = 0;
// 	try {
// 		extractNumbers(arr)
// 		arr.forEach(element => {
// 			sum += element;
// 		});
// 		return sum;
// 	} catch (error) {
// 		return 0;
// 	}
// }
function sumNumbersSafe(arr) {
	try {
		return extractNumbers(arr).reduce((sum, number) => sum + number, 0);
	} catch (error) {
		return 0;
	}
}

//  Exercise 3
function filterLargeSums(arrList, minTotal) {
	for (let i = 0; i < arrList.length; i++) {
		let sum = sumNumbersSafe(arrList[i]);
		if (sum >= minTotal) {
			return arrList[i]
		}
	}
}
console.log(filterLargeSums([[1, 2, 3], [10, "bad", 5], "fail"], 10) );
 