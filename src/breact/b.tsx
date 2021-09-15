import * as React from 'react';
import { ReactNode } from 'react';
import { CSSObject } from 'styled-components';
import { createUseStyles, Styles } from 'react-jss';
import { JssStyle } from "jss";

let i = 0;

function getStyleId() {
	return i++;
}

export type BRStyles = {
	css: JssStyle;
	id: string
}

export function styleDef(cssLike: CSSObject): BRStyles {
	return {
		css: cssLike,
		id: `${getStyleId()}`,
	};
}

export function styledDiv(children: ReactNode | undefined, css?: BRStyles): ReactNode {
	return createElement('div', {style: css} as any, children);
}

let styleMap = new Map();

export function createElement(element: string, props: any, ...children: any) {
	let custProps: any = {};
	if (props?.style) {
		const style: BRStyles = props.style;
		if (styleMap.has(style.id)) {
			custProps.className = styleMap.get(style.id);
		} else {
			let createdSTyle = createUseStyles({
				_d: props.style.css as Styles,
			});
			let clz = createdSTyle();
			let className = clz._d;
			custProps.className = className;
			styleMap.set(style.id, className);
		}
	}

	return React.createElement(element, custProps, ...children);
}

export const Fragment = React.Fragment;
