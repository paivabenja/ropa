import { useEffect, useState } from "react";
import "../styles/Item.css";

export default function Item(props) {
  const [imgType, setImgType] = useState("front");
  const [img, setImg] = useState([]);
  const [imgFront, setImgFront] = useState("");
  const [imgBack, setImgBack] = useState("");

  const getImg = () => {
    fetch("http://localhost:8000/api/images/", { mode: "cors" })
      .then((r) => r.json())
      // .then((r) => {
      //   console.log(r);
      //   return r;
      // })
      .then((r) => setImg(r))
      .catch(console.log("error amigo"));
  };

  const getImgs = () => {
    setImgFront(img[props.imgs - 1] ? img[props.imgs - 1].imgFront : "");
    setImgBack(img[props.imgs - 1] ? img[props.imgs - 1].imgBack : "");
  };

  const onHover = () => {
    setImgType("back");
  };

  const onLeave = () => {
    setImgType("front");
  };

  useEffect(getImg, []);
  useEffect(getImgs, [img]);

  return (
    <div
      className="p-8 rounded-3xl duration-500 item"
      onMouseOver={onHover}
      onMouseLeave={onLeave}
    >
      <div className="title">{props.title}</div>
      <div className="type">{props.type}</div>
      <img src={imgType === "front" ? imgFront : imgBack} alt="" />
      <div className="price">{props.price}</div>
      <div className="stock">
        {props.hasStock > 0 ? "Hay stock" : "No hay stock"}
      </div>
    </div>
  );
}
