import React from "react";
import Result from "./Result.jsx";


export default function Results(props) {
	if (!props.query) {
		return;
	}

	if (!props.data.length) {
		return <p>Tomuto dotazu nevyhovují žádné písně 🙁</p>;
	}

	return <>
		<h2>Nalezené písně pro dotaz: {props.query}</h2>
		<ol>
			{props.data.map(item => <Result data={item} />)}
		</ol>
	</>;
}
