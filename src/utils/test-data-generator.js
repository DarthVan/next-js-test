import { r } from "./utils";

export function generateTestData(count) {
	const array = [];
	const length = count || 100;
	for (let i = 0; i <= length; i++)
		array.push({
			name: 'Player N' + (i + 1),
			brand: getRandomBrand(),
			imgUrl: getRandomImgUrl(),
			badge: Math.random() > 0.5 ? 'new' : 'top'
		});
	console.log('generated new data:\nArray:', array, ';\nJSON:', JSON.stringify(array));
	return array;
}

function getRandomImgUrl() {
	switch (r(1, 2)) {
		case 1: return 'https://everythingpantry.com/wp-content/uploads/2022/11/41QV-5y8aQL._SL500_.jpg'; break;
		case 2: return 'https://m.media-amazon.com/images/I/51lymeAt66L._AC_SL1001_.jpg'; break;
	}
}

function getRandomBrand() {
	switch (r(1, 7)) {
		case 1: return 'iRiver'; break;
		case 2: return 'iPod'; break;
		case 3: return 'Sony'; break;
		case 4: return 'Flash Digma'; break;
		case 5: return 'Samsung'; break;
		case 6: return 'Yophoon'; break;
		case 7: return 'Ruizu'; break;
	}
}