export const ParseExpToPolishNotation = (list) => {
	let output = [],
		opStack = [],
		opList = [["+", "-"], ["*", "/"], ["^"]],
		getOpPriority = (op) => {
			let i = -1;
			for (let [index, value] of opList.entries()) {
				if (
					(Array.isArray(value) && value.indexOf(op) > -1) ||
					value === op
				) {
					i = index;
					break;
				}
			}
			return i;
		};

	if (!Array.isArray(list) || list.length === 0) return;
	list.forEach((item) => {
		if (/\d|\./.test(item)) {
			output.push(item);
		} else {
			if (getOpPriority(item) > -1) {
				if (
					opStack.length === 0 ||
					getOpPriority(item) >
						getOpPriority(opStack[opStack.length - 1])
				) {
					opStack.push(item);
				} else {
					while (true) {
						let popOP = opStack.pop();
						output.push(popOP);
						opStack.push(item);
						if (
							opStack.length === 0 ||
							getOpPriority(item) <=
								getOpPriority(opStack[opStack.length - 1])
						) {
							break;
						}
					}
				}
			} else {
				if (item === ")") {
					while (true) {
						let popOP = opStack.pop();
						if (popOP !== "(") {
							output.push(popOP);
						} else {
							break;
						}
					}
				} else {
					opStack.push(item);
				}
			}
		}
	});

	while (opStack.length != 0) {
		output.push(opStack.pop());
	}

	// eslint-disable-next-line no-console
	console.log(
		"Строка после преобразования к польской нотации: " + output.join(" ")
	);

	return output;
};
