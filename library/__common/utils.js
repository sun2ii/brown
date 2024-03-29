require('colors');
 const line = () => log("----------------------------------".rainbow);

/* 1. Helper */
const helper = {
	start: (a, k) => {
		log('--START--'.bgBlue.black)
		if (a) log('input:', a);
		if (k || k === 0) log('target:', k);
		line();
	},
	found: msg => {
		line();
		if (typeof msg === 'object') log(`found: [${msg}]`.bgMagenta.black);
		else log(`found: ${msg}`.bgMagenta.black);
	},
	prettyPrint: (a, ...args) => {
		let msg = '[';

		for (let i = 0; i < a.length; i++) {
			if (i === args[0] && i === a.length - 1) {
				msg += `${a[i]}`.bgRed.black;
			} else if (i === args[0] && i !== a.length - 1) {
				msg += `${a[i]}`.bgRed.black + ', ';
			} else if (i === args[1] && i === a.length - 1) {
				msg += `${a[i]}`.bgGreen.black;
			} else if (i === args[1] && i !== a.length - 1) {
				msg += `${a[i]}`.bgGreen.black + ', ';
			} else if (i === args[2] && i === a.length - 1) {
				msg += `${a[i]}`.bgBlue.black;
			} else if (i === args[2] && i !== a.length - 1) {
				msg += `${a[i]}`.bgBlue.black + ', ';
			} else if (i === a.length - 1) {
				msg += `${a[i]}`;
			} else {
				msg += `${a[i]}, `;
			}
		}
	
		msg += ']';
	
		console.log(msg);
	},
	print2D: (a, ...args) => {
		let msg = '';
		for (let i = 0; i < a.length; i++) {
			msg += '['
			for (let j = 0; j < a[i].length; j++) {
				if (args[0] === a[i][j]) 
					msg += `${a[i][j]}`.bgBlue.black;
				else if (args[1] === a[i][j]) 
					msg += `${a[i][j]}`.bgGreen.black;
				else if (args[2] === a[i][j]) 
					msg += `${a[i][j]}`.bgRed.black;
				else if (args[3] === a[i][j]) 
					msg += `${a[i][j]}`.bgYellow.black;
				else if (args[4] === a[i][j]) 
					msg += `${a[i][j]}`.bgWhite.black;
				else
					msg += `${a[i][j]}`

				if (j === a.length - 1) msg += `]`
				else msg += ', '
			}
			msg += '\n'
		}

		console.log(msg)
	},
	vars: (...args) => {
		for (let i = 0; i < args.length; i++) {
			if (i !== args.length - 1) {
				if (i === 0 && args[0] !== '' && args[1] !== '')
					write(`${args[i]}:`.bgBlue.black);
				else if (i === 2 && args[2] !== '')
					write(`${args[i]}:`.bgGreen.black);
				else if (i === 4)
					write(`${args[i]}:`.bgRed.black);
				else if (i === 6)
					write(`${args[i]}:`.bgYellow.black);
				else if (i === 8)
					write(`${args[i]}:`.bgWhite.black);
				else if (i === 10)
					write(`${args[i]}:`.bgMagenta.black);
				else log(` ${args[i]}`);
			}
			else 
				log(` ${args[i]}`);
		}
		line();
	},
	vars2: (...args) => {
		for (let i = 0; i < args.length; i++) {
			if (i !== args.length - 1) {
				if (i === 0)
					write(`${args[i]}:`.bgGreen.black);
				else if (i === 2 && args[2] !== '')
					write(`${args[i]}:`.bgYellow.black);
				else if (i === 4)
					write(`${args[i]}:`.bgRed.black);
				else if (i === 6)
					write(`${args[i]}:`.bgBlue.black);
				else if (i === 8)
					write(`${args[i]}:`.bgCyan.black);
				else if (i === 10)
					write(`${args[i]}:`.bgMagenta.black);
				else log(` ${args[i]}`);
			}
			else 
				log(` ${args[i]}`);
		}
		// line();
	},
	baseCase: stringBaseCase => {
		var msg =
		`BASE CASE:`.bgMagenta.black + ` ${stringBaseCase};`;
		console.log(msg);
	},
	recursiveStep: (isStart, functionName, variableList, result) => {
		var msg = '';
		if (isStart) {
			msg += `recurse+:`.bgGreen.black + ' ';
		} else {
			msg += `backtrack-:`.bgYellow.black + ' ';
		}
	
		msg += `${functionName}(`.bold;
	
		for (var i = 0; i < variableList.length; i++) {
			let variable = variableList[i];
			if (Array.isArray(variable)) {
				msg += '[' + variable + ']';
			} else {
				msg += variable;
			}
			if (i !== variableList.length - 1) {
				msg += ', ';
			}
		}
	
		if (isStart || !result) msg += `)`.bold;
		else if (result) {
			msg += `)`.bold + ` = ` + `${result}`.bgGreen.black.bold;
		}
	
		console.log(msg);
	}
}

/* LINKED LIST */
const linkedListHelper = {
	start: (a, k) => {
		log('--START--'.bgBlue.black)
		if (a) linkedListHelper.print('input', a);
		if (k || k === 0) log('target:', k);
		line();
	},
	print: (label, ll) => {
		if (ll === null) return;
		let list = listToArray(ll);

		if (!list.length) {
			log(color("empty list", "red"));
			return;
		}

		if (list.length === 1) {
			log(color(`${list[0].value}`, "blue"));
			return;
		}

		if (label) write(label + ": ");

		for (let i = 0; i < list.length; i++)  {
			let value = list[i].value;
			if (list[i].head && list.length > 1) {
				write(color(`${value} > `, "red"))
			} else if (list[i].tail && i === list.length - 1)  {
				write(color(`${value}`, "green"), 1)
			} else if (list[i].tail && i !== list.length - 1)  {
				write(color(`${value} > `, "green"), 1)
			}  else if (!list[i].head && !list[i].tail && i === list.length - 1) {
				write(color(`${value} `, "blue"))
			} else {
				write(color(`${value} > `, "blue"))
			}
		}

		console.log('')
	},
	pointers: (ll, x, y, label) => {
		if (ll === null) return;
		let list = listToArray(ll);

		if (!list.length) {
			log(color("empty list", "red"));
			return;
		}

		if (list.length === 1) {
			log(color(`${list[0].value}`, "blue"));
			pl();
			return;
		}

		if (label) write(label + ": ");

		for (let i = 0; i < list.length; i++)  {
			let value = list[i].value;
			if (x === i) write(color(`${value} > `, "red"))
			else if (y === i) write(color(`${value} > `, "green"), 1)
			else if (i === list.length - 1)
				write(color(`${value}`, "blue"), 1)
			else 
				write(color(`${value} > `, "blue"), 1)
		}
		log();
		pl();
	},
}

const listToArray = list => {
	let a = [];
	let node = list.head || list;
	let i = 0;

	while (node) {
		a.push({
			value : node.value,
			next  : (node.next) ? node.next.value : null,
			head : node === list.head ? 1 : 0,
			tail : node === list.tail ? 1 : 0
		})
		node = node.next;
		i++;
	}

	return a;
}

/* BST FUNCTIONS */
const binarySearchTreeHelper = {
	prettyPrint(tree) {
	
	},
    treeToArrDFS(t) {
		const fh = t => {
			if (!t) return;
			result.push(t.value);
			fh(t.left);
			fh(t.right);
		}

		let result = [];
		fh(t)
		console.log('result', result)
		return result;
	},
	treeToArrBFS(t) {
		let arr = [t];
		let result = [];

		while (arr.length) {
			let current = arr.shift();
			if (current.left) arr.push(current.left);
			if (current.right) arr.push(current.right);
			result.push(current.value);
		}

		console.log('result', result)
		return result;
	}
}
// DFS: 1 2 4 5 3 6 7
// BFS: 1 2 3 4 5 6 7

/* HELPER FUNCTIONS */
const helperFunctions = {
	 getLastNumber() {
		let i = a.length - 1;
		while (i >= 0 && a[i] === -1) i--;
		return i;
	 },
	 resizeWithZeroes(a, size) {
		if (size < a.length) return;

		let aIndex = a.length - 1;

		let result = Array(size).fill(0);
		let resultIndex = result.length - 1;

		while (aIndex >= 0) {
			result[resultIndex] = a[aIndex];
			resultIndex--;
			aIndex--;
		}

		return result;
	}, 
	trimBeginningZeroes(a) {
		let i = 0;
		while (i < a.length && a[i] === 0) i++;

		return (i === a.length) ? [0] : a.slice(i, a.length);
	},
	swap(a, i, j) {
		let temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}
}

/* DEBUG */
const color = (s, col, end = false) => {
	let map = {
		"regular": 00,
		"dim": 02,
		"whitebg": 07,
		"underline": 21,
		"red": 31,
		"green": 32,
		"yellow": 33,
		"blue": 34,
		"purple": 35,
		"teal": 36,
	}

	 return `\u001b[${map[col]}m${s}\u001b[0m`;
 }

const write = x => process.stdout.write(x);
const log = (...args) => args ? console.log(...args) : console.log('');

module.exports = {
	line,
	log,
	linkedListHelper,
	binarySearchTreeHelper,
	helper,
	helperFunctions,
}