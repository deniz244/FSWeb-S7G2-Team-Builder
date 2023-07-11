import { useState } from "react";

export default function Form(props) {
  const [formData, setFormData] = useState(props);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form başarıyla gönderildi!");
    // formu sıfırlamak - başlangıç haline getirmek
    setFormData(props);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <br />

        <label>
          <span>Adınız</span>
          <input
            name="isim"
            type="text"
            //value={formData.isim}
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
            //value={formData.rol}
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
            //value={formData.email}
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
