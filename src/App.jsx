import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/footer";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <main>
        <Header />
        <AppRoutes />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
