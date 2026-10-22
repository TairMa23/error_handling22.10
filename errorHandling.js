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
	const newArrList = [];
	for (let i = 0; i < arrList.length; i++) {
		let sum = sumNumbersSafe(arrList[i]);
		if (sum >= minTotal) {
			newArrList.push(arrList[i]);
		}
	}
	return newArrList
}
// console.log(filterLargeSums([[1, 2, 3], [10, "bad", 5], "fail"], 10));
//  Exercise 4
function summaryStats(arrList) {
	const nArrObj = [];
	const arr = filterLargeSums(arrList, 10)
	for (let i = 0; i < arr.length; i++) {
		let sum = sumNumbersSafe(arr[i]);
		let avg = sum / arr[i].length;
		nArrObj.push({"sum: ":sum,"avg: ": avg})
	}
	return nArrObj
}
// console.log(summaryStats([[1,2,3], [5,5,5], [100], "bad"]));
//  Exercise 5
function  safeCalculator(a, b, operation) {
	if (typeof a !== typeof b) {
		throw new TypeError("a and b must be the same type");
	}
	switch (operation) {
		case "add":
			return a + b;
		case "subtract":
			return a - b;
		case "multiply":
			return a * b;
		case "divide":
			return a / b;
		default:
			throw new Error("Unsupported operation");
	}
}
