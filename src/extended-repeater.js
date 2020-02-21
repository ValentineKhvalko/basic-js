module.exports = function repeater( str, options ) {
	let res = '';
	let deafaultRepeatTimes = !options.repeatTimes ? 1 : options.repeatTimes;
	let defaultSeporator = !options.separator ? '+' : options.separator;
	let defaultAddition = typeof options.addition === 'undefined' ? '' : options.addition;
	let defaultAdditionRepeatTimes = !options.additionRepeatTimes ? 1 : options.additionRepeatTimes;
	let defaultAdditionSeparator = !options.additionSeparator ? '' : options.additionSeparator;
		for( let i = 0; i < deafaultRepeatTimes; i++){
			res += str;
			for (let j = 0; j < defaultAdditionRepeatTimes; j++){
				res += defaultAddition;
				if (j + 1 < defaultAdditionRepeatTimes){
					res += defaultAdditionSeparator;
				}
			}
			if (i + 1 < deafaultRepeatTimes){
				res += defaultSeporator;
			}
		}
		return res;
};