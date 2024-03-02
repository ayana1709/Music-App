import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terending from "./trending/Terending";
import Favorities from "./Favorites/Favorities";
import Library from "./Library";
import Feed from "./feeds/Feed";
import Player from "./player/player";
import "./home.css";
import Sidebar from "../component/sidebar/Sidebar";
export default function Home() {
  return (
    <Router>
      <div className="main-body ">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/Feed" element={<Feed />} />
          <Route path="/Trending" element={<Terending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/Favorities" element={<Favorities />} />
        </Routes>
      </div>
    </Router>
  );
}
