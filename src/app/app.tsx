import * as React from "react";
import { BobrilReactIntagration } from "./brapper";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export function App() {
	return (
		<>
			<GlobalStyle/>
			<div style={{background: "#ccc",height: "100vh", padding: "10px"}}>

				<BobrilReactIntagration/>
			</div>
		</>
	);
}
