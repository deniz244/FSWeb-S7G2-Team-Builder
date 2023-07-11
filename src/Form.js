import React, { useState, useEffect } from "react";

const initialState = { isim: "", rol: " ", email: "" };

export default function Form(props) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (props.editingMember) {
      setFormData(props.editingMember);
    }
  }, [props.editingMember]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form başarıyla gönderildi!");
    // formu sıfırlamak - başlangıç haline getirmek
    setFormData(initialState);
    props.addMember(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <br />

        <label>
          <span>İsim</span>
          <input
            name="isim"
            type="text"
            value={formData.isim}
            onChange={handleChange}
          ></input>
        </label>

        <br />
        <br />
        <label>
          <span>Rol</span>
          <input
            name="rol"
            type="text"
            value={formData.rol}
            onChange={handleChange}
          ></input>
        </label>

        <br />
        <br />

        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <br />
        <button type="submit">Gönder</button>
      </form>
    </>
  );
}
