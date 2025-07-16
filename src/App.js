import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Events from "./pages/Events";

function App() {
	return (
		<CartProvider>
			<Router>
				<Layout>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/events"
							element={<Events />}
						/>
						<Route
							path="/events/:id"
							element={<div>Event Detail Page</div>}
						/>
						<Route
							path="/cart"
							element={<div>Cart Page</div>}
						/>
						<Route
							path="/checkout"
							element={<div>Checkout Page</div>}
						/>
						<Route
							path="/account"
							element={<div>Account Page</div>}
						/>
						<Route
							path="/orders"
							element={<div>Orders Page</div>}
						/>
						<Route
							path="/merchandise"
							element={<div>Merchandise Page</div>}
						/>
						<Route
							path="/about"
							element={<div>About Page</div>}
						/>
						<Route
							path="/contact"
							element={<div>Contact Page</div>}
						/>
						<Route
							path="/help"
							element={<div>Help Page</div>}
						/>
						<Route
							path="/privacy"
							element={<div>Privacy Policy Page</div>}
						/>
						<Route
							path="/terms"
							element={<div>Terms & Conditions Page</div>}
						/>
						<Route
							path="/cookies"
							element={<div>Cookie Policy Page</div>}
						/>
						<Route
							path="*"
							element={<div>404 - Page Not Found</div>}
						/>
					</Routes>
				</Layout>
			</Router>
		</CartProvider>
	);
}

export default App;
