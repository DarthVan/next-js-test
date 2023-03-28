import React, { useCallback } from 'react';
import { newShade } from '../../utils/hex-toner';

/**
 * Component description
 * id - number, можем распознать в родителе, что именно нажали
 * label - string
 * link - string ( URL, если задан, компонент отображается как линк )
 * size - string ('normal', 'big')
 * fullWidth - boolean, на всю ширину контейнера или нет
 * color - string
 * onClick - function(number)
 * styles - CSSProperties, дополнительные стили если надо
 */

const Button = ({ id, label, link, size, fullWidth, color, onClick, styles }) => {

	const buttonSize = size || 'normal';
	const buttonFullWidth = fullWidth ? true : false;
	const buttonColor = color || '#7777FF';

	const onButtonClick = useCallback((e) => {
		e.stopPropagation();
		e.preventDefault();
		
		if (onClick)
			onClick(id);
	}, [onClick]);

	// Компонента очень вариативная, через cssinjs удобнее
	return (
		<>
			{
				link ?
					<>
						<a className='link' href={link} target={'_blank'}>{label}</a>
						<style jsx>{`
							.link {
								color: ${buttonColor};

								text-shadow: 1px 1px 2px black;
								text-align: center;
								font-size: ${buttonSize == 'normal' ? '14px' : '28px'};
								white-space: nowrap;

								min-width: min-content;
								${buttonFullWidth ? null : 'max-width: max-content'};
								min-height: ${buttonSize == 'normal' ? '25px' : '50px'};

								cursor: pointer;

								transition: 0.25s;
							}
							.link:hover {
								color: ${newShade(buttonColor, 50)};
							}
							.link:active {
								color: ${newShade(buttonColor, -50)};
							}
							`}</style>
					</>
					:
					<>
						<button className="button" style={styles} onClick={(e) => onButtonClick(e)}>
							{label}
						</button>
						<style jsx>{`
							.button {
								display: block;
								
								background: linear-gradient(${newShade(buttonColor, 80)}, ${buttonColor});
								background-position: bottom;
								background-size: auto 200%;

								color: #eee9ff;
								text-shadow: 1px 1px 2px black;
								text-align: center;
								border: 1px solid ${newShade(buttonColor, -25)};
								border-radius: ${buttonSize == 'normal' ? '5px' : '10px'};
								font-size: ${buttonSize == 'normal' ? '14px' : '28px'};
								white-space: nowrap;

								min-width: ${buttonFullWidth ? '100%' : 'min-content'};
								max-width: ${buttonFullWidth ? 'max-content' : 'min-content'};
								min-height: ${buttonSize == 'normal' ? '25px' : '50px'};

								padding: ${buttonFullWidth ? '0' : '0 5px'};
								
								cursor: pointer;

								transition: 0.25s;
							}
							.button:hover {
								background-position: top;
								border: 1px solid ${newShade(buttonColor, 50)};
								box-shadow: 0 0 4px #d5d5ff;
							}
							.button:active {
								background-size: auto 100%;
								background: linear-gradient(${newShade(buttonColor, 40)}, ${newShade(buttonColor, -40)});
							}
						`}</style>
					</>
			}
		</>
	);
};

export default React.memo(Button);