import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <main>
          <Header />
          <Home/>
          <Footer></Footer>
      </main>
    </>
  );
}

export default App;
