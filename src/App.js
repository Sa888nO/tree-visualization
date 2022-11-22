import Calc from "@pages/Calc";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Calc />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
