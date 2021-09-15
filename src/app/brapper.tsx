import * as React from "breact";
import * as b from "breact";


export function BobrilReactIntagration() {
	return (
		<>
			<div>Bobril react wrapper</div>
			<BReact/>
		</>
	);
}

const style = b.styleDef({
	color: 'red',
	borderLeft: '2px solid yellow',
	paddingLeft: '14px',
});

const style1 = b.styleDef({
	color: 'blue',
	borderLeft: '2px solid yellow',
	paddingLeft: '14px',
});

const style2 = b.styleDef({
	color: '#9a409a',
	paddingLeft: '14px',
});

export function BReact() {
	const simpleDiv = b.styledDiv('hello');
	const styledDiv = b.styledDiv('world', style1);
	const styledDiv2 = b.styledDiv('nazdar', style2);
	const styledDiv2copy = b.styledDiv('nazdar2', style2);

	return (<>
		{simpleDiv}
		{styledDiv}
		{styledDiv2}
		{styledDiv2copy}
		<div style={style}>cau</div>
	</>);
}
