export function addCommas(number) {
	if (number === null || number === undefined) return number;

	const numberStr = number.toString();

	const integerPart = numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	return integerPart;
}
