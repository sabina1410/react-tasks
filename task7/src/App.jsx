import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    comment: "",
  })

  const handleChange = (e) => {
    setForm((p) => ({...p,[e.target.name]:[e.target.value]}));
  }

  const reset = () => {
    setForm({
      name: "",
      lastName: "",
      phone: "",
      email: "",
      comment: "",
    });
  }

  const handler = (e) => {
    e.preventDefault();
    reset();
    setForm((p) => ({...p, message: "Success"}))
    console.log(form.name);
    console.log(form.lastName);
    console.log(form.phone);
    console.log(form.email);
    console.log(form.comment);
  }

  useEffect(() => {
    if(form.message) {
      const timer = setTimeout(() => {
        setForm((p) => ({...p, message: ""}))
      }, 1000);
      return () => clearTimeout(timer);
    }
  })

  let isEmpty = form.name && form.lastName && form.phone && form.email && form.comment;

  return (
    <div className = "container">
      <form onSubmit={handler}>
        <label htmlFor="name">Ad:
          <input value = {form.name} name = "name" type = "text" onChange={handleChange} />
        </label>
        <label htmlFor="lastName">Soyad:
          <input value = {form.lastName} name = "lastName" type = "text" onChange={handleChange} />
        </label>
        <label htmlFor="phone">Telefon:
          <input value={form.phone} name = "phone" type = "tel" onChange={handleChange} />
        </label>
        <label htmlFor="email">E-mail:
          <input value={form.email} name = "email" type = "email" onChange={handleChange} />
        </label>
        <label htmlFor="comment">Şərh:
          <input value={form.comment} name = "comment" type = "text" onChange={handleChange} />
        </label>
        <div className = "alert">{form.message}</div>
        <button disabled={!isEmpty}>Send</button>
      </form>
    </div>
  )
}

export default App
