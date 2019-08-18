const validEmailRegex = RegExp(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const validateForm = (errors, dirty) => {
	if (dirty){
		let valid = true;
		Object.values(errors).forEach(
			(val) => {
				console.log(val);
				val.length > 0 && (valid = false)
			}
		);
		return valid;
	}else{ return false}
};

module.exports = {
	validateForm: validateForm,
	validEmailRegex: validEmailRegex
};