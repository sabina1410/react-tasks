import { useState } from "react";
import "./Registration.css";
const Registration = () => {
    const [form, setForm] = useState({
        fullName: "",
        fin: "",
        gender: "",
        age: "",
        email: "",
        phone: "",
        text: "",
        check: false,
    })
    const handleChange = (e) => {
        setForm((p) => ({...p,[e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value}));
    }
    const reset = () => {
        setForm({
            fullName: "",
            fin: "",
            gender: "",
            age: "",
            email: "",
            phone: "",
            text: "",
            check: false,
        });
    }
    const btn = (e) => {
        console.log("Kart qeydiyyatdan keçdi");
        console.log(form);
        reset();
    }
    return (
        <div className = "container">
            <div className = "form">
                <label htmlFor="fullName">Xəstənin tam adı:
                    <input value={form.fullName} type = "text" name = "fullName" onChange={handleChange} />
                </label>
                <label htmlFor="fin">Seriya və pasport nömrəsi:
                    <input value={form.fin} type = "text" name = "fin" onChange={handleChange} />
                </label>
                <label htmlFor="gender">Cinsiyyəti:
                    <select value={form.gender} name = "gender" onChange={handleChange}>
                        <option value = "male">Male</option>
                        <option value = "female">Female</option>
                    </select>
                </label>
                <label htmlFor="age">Yaş:
                    <input value={form.age} type = "number" name = "age" onChange={handleChange} />
                </label>
                <label htmlFor="email">E-mail:
                    <input value={form.email} type = "email" name = "email" onChange={handleChange} />
                </label>
                <label htmlFor="phone">Telefon nömrəsi:
                    <input value={form.phone} type = "tel" name = "phone" onChange={handleChange} />
                </label>
                <label htmlFor="text">Simptomların təsviri:
                    <textarea value={form.text} name = "text" onChange={handleChange}></textarea>
                </label>
                <label htmlFor="check" className="checking">Checkbox «Təkrar qəbul»:
                    <input checked={form.check} className = "check" name = "check" type = "checkbox" onChange={handleChange} />
                </label>
                <button onClick={btn}>Submit</button>
            </div>
        </div>
    )
}
export default Registration;