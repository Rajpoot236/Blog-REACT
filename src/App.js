import "./styles.css";
import { Router } from "@reach/router";

import { Bollywood, Hollywood, Home, Post, Technology, Food, Fitness } from "./pages";

export default function App() {
  return (
    <Router>
      <Home path="/" />
      <Bollywood path="/bollywood" />
      <Post path="/postDetail" />
      <Technology path="/technology" />
      <Hollywood path="/hollywood" />
      <Food path="/food" />
      <Fitness path="/fitness" />
    </Router>
  );
}
