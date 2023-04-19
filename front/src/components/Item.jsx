import { useEffect, useState } from "react";

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
      className="w-64 h-72 overflow-hidden rounded-lg bg-gruvbox-bg4"
      onMouseOver={onHover}
      onMouseLeave={onLeave}
    >
        <img src={imgType === "front" ? imgFront : imgBack} className="w-full h-56 object-cover" />
        <div className="p-5 text-center h-full">{props.title}</div>
    </div>
  );
}
