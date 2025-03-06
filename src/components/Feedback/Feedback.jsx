import { useState } from "react";
import "./feedback.scss";

export default function Feedback() {
    const [formData, setFromData] = useState({
        name: "",
        phone: "",
        email: ""
    });
    const [display, setDisplay] = useState("");


    function onChangeHandler(event) {
        const { name, value } = event.target;
        setFromData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    function submite(event) {
        event.preventDefault();
        setDisplay(`Ім'я: ${formData.name}, Телефон: ${formData.phone}, Пошта: ${formData.email}`);

        Object.entries(formData).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
        
        setFromData({
            name: "",
            phone: "",
            email: ""
        });
    }

    return (
        <div className="feedback">

            <form onSubmit={submite}>
                <input onChange={onChangeHandler} name="name" value={formData.name} type="text" placeholder="Ваше Ім'я" required />
                <input onChange={onChangeHandler} name="phone" value={formData.phone} type="text" placeholder="Ваш телефон" required />
                <input onChange={onChangeHandler} name="email" value={formData.email} type="text" placeholder="Ваш email" required />

                <button type="submit">Відправити</button>
            </form>

            <div>
                <p>{display}</p>
            </div>
        </div>
    );
}