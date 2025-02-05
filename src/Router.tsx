import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layout/DefaultLayout";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	);
}
