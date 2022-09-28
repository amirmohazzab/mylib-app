import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App";
import Books from './components/Books';
import About from './components/About';
import Book from './components/Book';
import BookContextProvider from "./context/bookContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookContextProvider>   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/about" element={<About/>} />
          <Route path="/books" element={<Books/>} >
            <Route
              index
              element={
                <main style={{ padding: "5rem", width: "30rem" }}>
                  <h2>  choose your favorite book </h2>
                </main>
              }
            />
            <Route path=":number" element={<Book/>} />
          </Route>
          <Route path="*" element={
              <main style={{ padding: "1rem" }}>
                <h2>404</h2>
              </main>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
    </BookContextProvider>
  </React.StrictMode>,
);
