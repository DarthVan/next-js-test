import React, { useCallback, useContext } from 'react';
import { Context } from '../../context';
import Button from '../button';
import Input from '../input';
import style from './style.module.css';

/**
 * Component description
 * current - number, индекс выбранной страницы
 * total - number, всего страниц
 * onChange - function(number)
 */

const Paginator = ({ current, total, onChange }) => {
	const isMobile = useContext(Context);

	const onValueChange = useCallback((value) => {
		if (!value)
			return;

		// если число, то это id из кнопок
		if (typeof value == 'number') {
			switch (value) {
				case 1: value = current > 0 ? (current - 1) : current; break; // назад
				case 2: value = current < (total - 1) ? (current + 1) : current; break; // вперед
			}
		} else {
			value = parseInt(value) - 1;
		}

		onChange(value);
	}, [current, total]);

	return (
		<div className={style.paginator}>

			<Button id={1} label={'<'} onClick={onValueChange} color={'#444488'}
				styles={isMobile ? { minWidth: '50px' } : { minWidth: '25px' }}
				size={isMobile ? 'big' : 'normal'}
			/>

			<Input value={current + 1} min={1} max={total} type={'number'} onChange={onValueChange}
				styles={isMobile ? { height: '50px', width: '70px', fontSize: '25px' } : { height: '25px' }}
			/>

			<Button id={2} label={'>'} onClick={onValueChange} color={'#444488'}
				styles={isMobile ? { minWidth: '50px' } : { minWidth: '25px' }}
				size={isMobile ? 'big' : 'normal'}
			/>
		</div>
	);
};

export default React.memo(Paginator);