import React from 'react';
import Button from '../../button';
import Container from '../../container';
import style from './style.module.css';

/**
 * Component description
 */

const Item = ({ name, brand, imgUrl, badge }) => {

	let badgeRender;
	switch (badge) {
		default: badgeRender = null; break;
		case 'new': badgeRender = <Button label={'New'} color={'#CCCC00'} styles={{ minHeight: '18px', margin: '0 5px 0 auto' }} />; break;
		case 'top': badgeRender = <Button label={'Top'} color={'#FF0000'} styles={{ minHeight: '18px', margin: '0 5px 0 auto' }} />; break;
	}

	return (
		<div className={style.item} style={{ backgroundImage: 'url(' + imgUrl + ')' }}>
			<div className={style.itemInfo}>
				<div className={style.itemInfoTextBlock}>
					<span className={style.itemTitle}>{name}</span>
					<span className={style.itemBrand}>{brand}</span>
				</div>
				{badgeRender}
			</div>
		</div>
	);
};

export default React.memo(Item);