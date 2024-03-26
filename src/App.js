import Home from "./Pages/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Contact from "./Pages/Contact";
import Layout from "./Layout";

export default function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/contact" element={<Layout><Contact /></Layout>} />
          </Routes>
      </Router>
  )
}