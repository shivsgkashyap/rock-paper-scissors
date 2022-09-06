import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div class="rock-paper-scissors">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
