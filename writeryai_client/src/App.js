import './App.css';
import Footer from './Components/Footer/Footer';
import Navigationbar from './Components/Navbar/NavHeader.jsx';
import Aboutus from './Components/Pages/About/Aboutus';
import Home from './Components/Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/Pages/SignUp/SignUp';
import Login from './Components/Pages/Login/Login';
import Blog from './Components/Pages/Blog/Blog';
import Pricing from './Components/Pages/Pricing/Pricing';
import ChatAI from './Components/Pages/Chat-withAI/ChatAI';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/chatai" element={<ChatAI />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
