import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import { AppRoutes } from "./routes/AppRoutes";
import Header from "./components/Header";
import { Cart } from "./components/Cart";

function App() {
  return (
    <Router>
      <main>
        <Header/>
        <Cart/>
        <AppRoutes />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
