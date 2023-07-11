import "./App.css";
import Form from "./Form";

import React, { useState } from "react";

const ekip = [{ isim: "Ayşe", rol: "Developer", email: "ayse@mail.com" }];

function App() {
  const [uyeler, setUyeler] = useState(ekip);

  return (
    <div className="App">
      <Form uyeler={uyeler} />
    </div>
  );
}

export default App;
