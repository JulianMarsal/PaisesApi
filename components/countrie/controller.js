const store = require('./store.js');


function listCountries(value1,value2) {
	return new Promise((resolve, reject) => {
		if(!value1 || !value2){
			reject("You must be write 2 values, V1 and V2");
		}
		if(value1 > value2){
			reject("The value2 must be greater than the value1")
		}
		resolve(store.list(value1,value2));
	});
};

module.exports = {
    listCountries,
}