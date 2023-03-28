import React from 'react';
import style from './style.module.css';

/**
 * Component description
 */

const Layout = ({ children, title }) => {
	const t = title ? title : 'Title';

	return (
		<div className={style.layout}>
			<div className={style.layoutHead}>
				<span className={style.layoutTitle}>{t}</span>
			</div>
			{children}
		</div>
	);
};

export default React.memo(Layout);