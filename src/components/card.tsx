

import "./card.css";
interface CardProps{
    price:number,
    title:string,
    image :string
}

// const API_URL = "http://localhost:8080";

export default function Card({title, image,price}:CardProps) {
    return(
        <div className="card">
            <img src={image}
                 style={{
                     maxWidth: "100%",
                     maxHeight: "150px",
                     objectFit: "cover"
                 }}/>
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}