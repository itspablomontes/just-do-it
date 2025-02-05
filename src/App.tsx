import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
function App() {
	return (
		<div className=" text-white ">
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	);
}

export default App;
