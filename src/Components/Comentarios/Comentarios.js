import React from "react";
import { image } from "faker";
import "./comentarios.css";

const Comentarios = (props) => {
  return (
    <div className="container">
      <img src={image.avatar()} alt="avatar" className="img" />
      <div className="wrap">
        <div className="nomeData">
          <span className="autor">{props.nome}</span>
          <span>{props.data}</span>
        </div>
        <div className="coment">
          <p>{props.comentario}</p>
        </div>
      </div>
    </div>
  );
};

export default Comentarios;
