import React from "react";
import Logo from "../../assets/images/almirflix.png";
import "./Menu.css";
import Button from "../Button"
import { Link } from 'react-router-dom'


function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
