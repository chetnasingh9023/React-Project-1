import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Component/pages/Home";
import BookList from "./Component/pages/BookList";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookList />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
