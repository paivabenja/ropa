import { useEffect, useState } from "react";
import "../styles/Item.css";

export default function Item(props) {
  const [imgType, setImgType] = useState("front");
  const [img, setImg] = useState({})

  const getImg = () => {
    console.log('getImg')
    fetch('https://localhost:8000/api/images/', { mode: 'no-cors' })
      .then(r => r.json())
      .then(setImg)
  }


  const onHover = () => {
    setImgType("back");
  };

  const onLeave = () => {
    setImgType("front");
  };

  useEffect(getImg, [])

  return (
    <div className="item" onMouseOver={onHover} onMouseLeave={onLeave}>
      <div className="title">{props.title}</div>
      <div className="type">{props.type}</div>
      <img src={imgType === "front" ? props.imgFront : props.imgBack} alt="" />
      <div className="price">${props.price}</div>
      <div className="stock">
        {props.hasStock > 0 ? "Hay stock" : "No hay stock"}
      </div>
    </div>
  );
}
