import React, { useEffect, useState } from "react";
import Button from "../components/button";
import Layout from "../components/layout";
import List from "../components/list";
import { Context } from "../context";
import { isMobileOS } from "../utils/os-checker";
import { generateTestData } from "../utils/test-data-generator";

/**
 * Component description
 */

const App = ({ list }) => {
	const [items, setItems] = useState(list || []);
	const [isMobile, setContext] = useState(true); // по умолчанию мобильная версия

	// тут должен быть фетч с сервера, или фетч json, но пока просто сгенерируем через утиль
	useEffect(() => {
		setContext(isMobileOS());


		//setContext(true);
		//setItems(generateTestData(125)); 
	}, []);

	return (
		<Context.Provider value={isMobile}>
			<Layout title={'Next App'}>
				<List items={items} limit={20} />

				{/* Примеры вариантов кнопок */}
				<Button label={"This is a 100% width button"} fullWidth={true} />
				<Button label={"Red button"} color={'#FF4444'} />
				<Button label={"Blue button"} color={'#4444FF'} />
				<Button label={"Green button"} color={'#44FF44'} />
				<Button label={"This is a BIG colored button"} color={'#777777'} size={'big'} />
				<Button label={"This is a 100% width link button"} link={'https://google.com'} fullWidth={true} />
				<Button label={"This is a link colored big button"} color={'#44СС44'} size={'big'} link={'https://google.com'} />
			</Layout>
		</Context.Provider>
	);
};

export default App;

export async function getServerSideProps(context) {
	let host = 'http://' + context.req.headers.host + '/'; //'http://localhost:3000/';
	let list = [];

	await fetch(host + 'test_data.json', { cache: 'no-cache' })
		.then(
			(response) => response.json(),
			(reason) => console.error('Main: cant load test_data.json!', reason)
		)
		.then((json) => {
			list = json?.list;
			if (!list || !list.length) {
				console.error('Main: items array is null or empty');
				return;
			}
		});

	return {
		props: { list }, // will be passed to the page component as props
	}
}