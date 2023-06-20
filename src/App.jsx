import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import { AppRoutes } from "./routes/AppRoutes";
import Header from "./components/Header";
import { Cart } from "./components/Cart";
import { LoginProvider } from "./context/login";

function App() {
  return (
    <LoginProvider>
      <Router>
        <main>
          <Header />
          <Cart />
          <AppRoutes />
          <Footer />
        </main>
      </Router>
    </LoginProvider>
  );
}

export default App;
