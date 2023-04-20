import { useEffect, useState } from "react";

export default function Item(props) {
  const [visible, setVisible] = useState("hidden");
  const [height, setHeight] = useState("h-64");
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

  const handleClick = (e) => {
    if (height === "h-72") setHeight("h-64");
    if (height === "h-64") setHeight("h-72");
    if (visible === "hidden") setVisible("block");
    if (visible === "block") setVisible("hidden");
  };

  useEffect(getImg, []);
  useEffect(getImgs, [img]);
  return (
    <div
      className={
        "w-64 rounded-xl bg-neutral-700 text-neutral-50 duration-300 flex flex-col " +
        height
      }
      onMouseOver={onHover}
      onMouseLeave={onLeave}
      onClick={handleClick}
    >
      <img
        src={imgType === "front" ? imgFront : imgBack}
        className="w-full h-44 object-cover rounded-t-xl bg-neutral-700"
      />
      <div className="p-4 flex flex-col items-center justify-evenly h-full m-0">
        <div className="font-bold text-lg">{props.title}</div>
        <div className={" " + visible}>
          <div className="text-sm">${props.price}</div>
          <div>{props.hasStock ? "" : "No hay stock"}</div>
        </div>
      </div>
    </div>
  );
}
