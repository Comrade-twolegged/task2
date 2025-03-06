import dbFlow from "../../data/db-flowers.json";
import "./main.scss";

import img1 from "../assets/image/sales/1.png";
import img2 from "../assets/image/sales/2.png";
import img3 from "../assets/image/sales/3.png";
import img4 from "../assets/image/sales/4.png";
import img5 from "../assets/image/sales/5.png";
import img6 from "../assets/image/sales/6.png";

const salesImages = {
    "1.png": img1,
    "2.png": img2,
    "3.png": img3,
    "4.png": img4,
    "5.png": img5,
    "6.png": img6,
};

export default function Main() {
    return (
        <main>
            <h1 className="title__main">Хіт продажів</h1>

            <div className="sales">
                {dbFlow.map((elem) => (
                    <div className="card" key={elem.id}>
                        <img src={salesImages[elem.url]} alt={elem.url} />
                        <p className="price">{elem.price} грн</p>
                        <p>{elem.name}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
