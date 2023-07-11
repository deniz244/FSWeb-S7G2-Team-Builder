import "./App.css";
import Form from "./Form";

import { useState } from "react";

const ekip = [
  { isim: "Ayşe", rol: "Frontend ", email: "ayse@mail.com" },
  { isim: "Ali", rol: "Backend", email: "ali24@mail.com" },
  { isim: "Didem", rol: "Backend + Frontend", email: "didi21@mail.com" },
];

function App() {
  const [memberList, setMememberList] = useState(ekip);
  const [editOrder, setEditOrder] = useState(null);

  function addMember(newMember) {
    if (editOrder !== null) {
      const newMemberList = [...memberList];
      newMemberList[editOrder] = newMember;
      setMememberList(newMemberList);
      setEditOrder(null);
    } else {
      const newMemberList = [...memberList, newMember];
      setMememberList(newMemberList);
    }
  }

  const editHandler = (order) => {
    console.log("edithandler çalıştı", order);
    setEditOrder(order);
  };

  return (
    <div className="App">
      {memberList.map((member, index) => (
        <p key={index}>
          <strong>{member.isim}:</strong>
          {member.rol}-{member.email}{" "}
          <button onClick={() => editHandler(index)}>Düzenle</button>
        </p>
      ))}

      <Form addMember={addMember} editingMember={memberList[editOrder]} />
    </div>
  );
}

export default App;
