import { useState } from "react";
import "../styles/Item.css";

export default function Item(props) {
  const getSizes = (sizes) => {
    const last = sizes.length - 1;
    let array = "";
    sizes.map((size, index) => {
      if (index === last) {
        array += size;
        return;
      }
      array += size + ", ";
    });
    return "Available sizes" + array;
  };

  const [img, setImg] = useState("front");

  const onHover = () => {
    setImg("back");
  };

  const onLeave = () => {
    setImg("front");
  };

  return (
    <div className="item" onMouseOver={onHover} onMouseLeave={onLeave}>
      <div className="title">{props.title}</div>
      <div className="type">{props.type}</div>
      <div className="sizes">
        {props.sizes.length > 0 ? getSizes(props.sizes) : ""}
      </div>
      <img src={img === "front" ? props.imgFront : props.imgBack} alt="" />
      <div className="price">${props.price}</div>
      <div className="stock">
        {props.sizes.length > 0 ? "Hay stock" : "No hay stock"}
      </div>
    </div>
  );
}
