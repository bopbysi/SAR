export const required = value =>
	value === "" || typeof value === "undefined" || value === null
		? "Mention obligatoire"
		: undefined;

export const number = value =>
	value && isNaN(Number(value)) ? "Code Postal non valide" : undefined;

export const positive = value =>
	value && value < 0 ? "Please enter a positive value." : undefined;

export const integer = value =>
	value &&
	!(
		!isNaN(value) &&
		parseInt(Number(value)) == value &&
		!isNaN(parseInt(value, 10))
	)
		? "Please enter a valid integer."
		: undefined;

export const warnMinMax = (value, min, max) => {
	if (parseFloat(value) < min || parseFloat(value) > max) {
		return `This value is usually between ${min} and ${max}.`;
	} else {
		return undefined;
	}
};

export const floatWithPoint = val => {
	return val && val.replace(",", ".");
};