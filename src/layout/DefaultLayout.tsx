import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
	return (
		<div className="bg-zinc-900 min-h-screen">
			<Header />
			<Outlet />
		</div>
	);
}
