import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import { links } from "./Components/utils/links";
import NotFound from "./Pages/404/NotFound";

function App() {
  const { home, contact, favs, dentist } = links;

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={home.path} element={<Home />} />
        <Route path={`${dentist.path}/:id`} element={<Detail />} />
        <Route path={favs.path} element={<Favs />} />
        <Route path={contact.path} element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
