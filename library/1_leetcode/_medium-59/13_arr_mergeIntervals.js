const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n log n)
// 🛰 O(n)
const mergeIntervals = a => {
	let points = [];
	let res = [];

	for (let i = 0; i < a.length; i++) {
		points.push([a[i][0], 0]);
		points.push([a[i][1], 1]);
	}

	points.sort((a, b) => a[0] - b[0]);

	let s = null;
	let numIntervals = 0;

	for (let i = 0; i < points.length; i++) {
		if (points[i][1] === 0) {
			numIntervals++;
			if (numIntervals === 1) s = points[i];
		} else {
			numIntervals--;
			if(numIntervals === 0) res.push([s[0], points[i][0]]);
		}
	}

	return res;
}
 
const main = () => {
	log(mergeIntervals([ [1,3], [3,5], [6,8], [7,9] ]));
}
 
main();
