import { Sobre } from "./routes/Sobre";
import { FAQ } from "./routes/FAQ";
import { Footer } from "./components/Footer";
import { Home } from "./routes/Home";
import { Nav } from "./components/Nav";
import { ScrollToTop } from "./components/ScrollToTop";
import { Solução } from "./routes/Solução";
import "./App.css";

function App() {
  return (
    <>
    <div className="bg-[#304355] text-white ;">
      <div className="bg-[url(./img/gs-imagem.jpg)] bg-cover bg-center bg-no-repeat text-white">
        <Nav/>
        <Home />
      </div>
      <Sobre />
      <Solução />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
    </>
  );
}

export default App;
