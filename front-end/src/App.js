import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import MainPage from "./pages/MainPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<MainPage />}></Route>
				<Route path="/create" element={<CreatePage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
