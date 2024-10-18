import Result from "./Result.jsx";


export default function Results(props) {
	const { query, results } = props.data;

	if (!query) { return; }

	if (!results.length) {
		return <p>Tomuto dotazu nevyhovují žádné písně 🙁</p>;
	}

	let items = results.map(item => <Result data={item} />);
	return <>
		<h2>Nalezené písně pro dotaz: {query}</h2>
		<ol>{items}</ol>
	</>;
}
