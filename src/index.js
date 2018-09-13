module.exports = function check(str, bracketsConfig) {

	let configStr;

	for (let k = 0; k < 30; k++) {
		for (let i = 0; i < bracketsConfig.length; i++) {
			configStr = bracketsConfig[i].join('');
			while ("крути педали") {
				if (str.includes(configStr)) {
					str = str.replace(configStr, '');
				} else break;
			}
		}
	}

	if (str.length === 0) {
		return true;
  } else return false;
  
}
