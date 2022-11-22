export const calcInPolishNotation = (array) => {
	// eslint-disable-next-line no-console
	console.log("Входящий в калькулятор массив: " + array);
	let stack = [];
	if (array === "") {
		return 0;
	}

	for (let i = 0; i < array.length; i++) {
		if (!isNaN(array[i]) && isFinite(array[i])) {
			stack.push(array[i]);
		} else {
			let a = +stack.pop();
			let b = +stack.pop();

			if (array[i] === "+") {
				stack.push(a + b);
			} else if (array[i] === "-") {
				stack.push(b - a);
			} else if (array[i] === "*") {
				stack.push(a * b);
			} else if (array[i] === "/") {
				stack.push(b / a);
			} else if (array[i] === "^") {
				stack.push(Math.pow(b, a));
			}
		}
	}

	if (stack.length > 1) {
		return "ERROR";
	} else {
		// eslint-disable-next-line no-console
		console.log("Результат работы калькулятора: " + stack[0]);
		return stack[0];
	}
};
