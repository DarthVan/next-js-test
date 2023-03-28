import React, { useCallback, useEffect, useRef, useState } from 'react';
import style from './style.module.css';

/**
 * Component description
 * name - string,
 * value - string
 * min - number (для числового поля)
 * max - number (для числового поля)
 * type - string, тип инпута (number / string)
 * placeholder - string
 * onChange - function(string, string)
 * styles - CSSProperties, дополнительные стили если надо
 */

function Input({ name, value, min, max, type, placeholder, onChange, styles }) {
	const ref = useRef(null);
	const [val, setVal] = useState(value);

	const onValueChange = useCallback(e => {
		const newValue = type == 'number' ? checkOnRange(e.target.value) : e.target.value;
		setVal(newValue);
		onChange(newValue, name);
	}, [onChange]);

	useEffect(() => {
		setVal(value);
	}, [value]);

	const checkOnRange = (str) => {
		if (!str)
			return '';
		let intValue = str ? parseInt(str) : 0;
		const minInt = min ? parseInt(min) : 0;
		const maxInt = max ? parseInt(max) : 999999999;
		if (intValue < minInt)
			intValue = minInt;
		if (intValue > maxInt)
			intValue = maxInt;
		return intValue.toString();
	}

	const intRx = /\d$/; // или цифры или пустая строка
	const integerChange = (e) => {
		//console.log(e.key);
		if (intRx.test(e.key) || e.key == 'Backspace')
			return;
		e.preventDefault();
	};

	useEffect(() => {
		const input = ref?.current;
		if (type == 'number')
			input.addEventListener("keydown", integerChange);

		return () => {
			input?.removeEventListener("keydown", integerChange);
		}
	}, []);

	return (
		<input
			className={style.input}
			style={styles}
			ref={ref}
			name={name}
			value={val}
			min={min}
			max={max}
			/* type={type} */
			placeholder={placeholder}
			onChange={onValueChange}
		/>
	)
}

export default React.memo(Input);