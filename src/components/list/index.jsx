import React, { useCallback, useState } from 'react';
import Container from '../container';
import Paginator from '../paginator';
import Item from './item';
import './style.module.css';

/**
 * Component description
 * items - Array[{name:string, brand:string, imgUrl:string, badge:string}] // массив итемов откуда-то извне
 * limit - number // кол-во итемов на странице
 * onPageChange - function(number):void // для оповещения родителя о листании (чтоб запомнить позицию в стор и т.р.)
 */

const List = ({ items, limit, onPageChange }) => {

	// Количество страниц
	const pages = Math.ceil(items?.length / Math.max(limit, 1));

	// индекс текущей страницы
	const [index, setIndex] = useState(0);

	const from = index * limit;
	let to = index * limit + limit;

	if (to > items?.length - 1)
		to = items?.length - 1;

	const renderItems = [];
	if (items?.length)
		for (let i = from; i < to; i++) // тут это лучше чем через map, меньше итераций
			renderItems.push(<Item name={items[i].name} brand={items[i].brand} imgUrl={items[i].imgUrl} badge={items[i].badge} key={i} />);

	const onChange = useCallback((value) => {
		setIndex(value);
		if (typeof onPageChange == 'function')
			onPageChange(value);
	}, []);

	return (
		<>
			<Container>{renderItems}</Container>
			{pages > 1 ? <Paginator current={index} total={pages} onChange={onChange} /> : null}
		</>
	);
};

export default React.memo(List);