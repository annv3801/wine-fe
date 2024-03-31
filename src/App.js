import Home from "./Pages/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Contact from "./Pages/Contact";
import Layout from "./Layout";
import ChooseMe from "./Pages/ChooseMe";
import Process from "./Pages/Process";

export default function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/contact" element={<Layout><Contact /></Layout>} />
              <Route path="/choose-me" element={<Layout><ChooseMe /></Layout>} />
              <Route path="/process" element={<Layout><Process /></Layout>} />
          </Routes>
      </Router>
  )
}