import { useState } from "react";
import "./App.css";
import { Button } from "antd";

function App() {
	const [indicator, setIndicator] = useState(1);

	return (
		<>
			<div className="app">
				<h1>Indicator: {indicator}</h1>
				<Button
					type="primary"
					size="large"
					onClick={() => setIndicator(indicator + 1)}
				>
					Increase
				</Button>
			</div>
		</>
	);
}

export default App;
