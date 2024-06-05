import React from "react";


export default function Result(props) {
	let html = {__html: props.data.text};
	return <li>
		<a href={props.data.url}>{props.data.title}</a>
		<br/>
		<span dangerouslySetInnerHTML={html}></span>
	</li>;
}
