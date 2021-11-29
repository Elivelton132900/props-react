import React from "react";
import Comentarios from "./Components/Comentarios/Comentarios";
import Approval from "./Components/Approval/Approval"

function App() {
  return (
    <div className="App">
      <Approval>
        <Comentarios nome="Alex" data="ontem às 07:58 AM" comentario="Bom post" />
      </Approval>

      <Approval>
        <Comentarios nome="Dom" data="ontem às 20:58 PM" comentario="Post objetivo e simples de entender, parabéns" />
      </Approval>

    </div>
  );
}

export default App;
