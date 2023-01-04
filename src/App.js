import RedAndBlackTree from "@pages/RedAndBlackTree";
import Tree from "@pages/Tree";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="redAndBlackTree" element={<RedAndBlackTree />} />
				<Route path="Tree" element={<Tree />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
