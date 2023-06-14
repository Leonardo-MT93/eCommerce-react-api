import { useCart } from "../hooks/useCart";
import "./Footer.css";
const Footer = () => {
  const { cart } = useCart();
  return <footer className="footer">{JSON.stringify(cart, null, 2)}</footer>;
};

export default Footer;
