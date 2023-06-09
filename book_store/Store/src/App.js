import React from "react"
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import AddBook from "./components/AddBook";
import About from "./components/About";
import Books from "./components/Book/Books";
import BookDetails from "./components/Book/BookDetails";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/add" element={<AddBook/>} exact/>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/books" element={<Books/>} exact/>
          <Route path="/books/:id" element = {<BookDetails/>} exact></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
