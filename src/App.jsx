import { BrowserRouter, Routes, Route, createContext } from "react-router-dom";

import Home from './pages/Home'

import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from './components/Search'
import Detail from './pages/Detail'

//import { perfumes } from './data/perfumeData'

export const DataContext = createContext()

import './App.css'

function App() {

  return (
    <>
		<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignUpPage />} />
				</Routes>

				<Footer />
		</BrowserRouter>
    </>
  )
}

export default App
