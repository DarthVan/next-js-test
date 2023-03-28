import React from 'react';
import style from './style.module.css';

/**
 * Component description
 * children - JSX
 * styles - CSSProperties, если нужны особые параметры
 */

const Container = ({children, styles}) => {
	return (
		<div className={style.container} styles={styles}>
			{children}
		</div>
	);
};

export default React.memo(Container);