function extractNumbers(arr) {
	if (!Array.isArray(arr)) {
		throw new TypeError("Input must be an array");
	}

	return arr.filter((value) => typeof value === "number" && !Number.isNaN(value));
}
