import "./styles.css";
import { Router } from "@reach/router";

import { Bollywood, Home, Post } from "./pages";

export default function App() {
  return (
    <Router>
      <Home path="/" />
      <Bollywood path="/bollywood" />
      <Post path="/postDetail" />
    </Router>
  );
}
