/** random value from min...max */
export function r(min, max) {
	return Math.round(Math.random() * (max - min + 1) - 0.5) + min;
}