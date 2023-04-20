import Item from "./Item";
import { useEffect, useState } from "react";
import productos from "./prods";

export default function Home() {
  const [clothesStock, setClothesStock] = useState([]);

  const getClothesStock = () => {
    fetch("http://localhost:8000/api/ropa/", { mode: "cors" })
      .then((r) => r.json())
      // .then((r) => {
      //   console.log(r);
      //   return r;
      // })
      .then((r) => setClothesStock(r))
      .catch(console.log("error amigo"));
  };

  useEffect(getClothesStock, []);

  return (
    <div className="flex flex-wrap mt-4 m-12 justify-center items-start content-start gap-12 z-10">
      {clothesStock.map((o, i) => {
        return (
          <Item
            key={i}
            title={o.title}
            type={o.type}
            imgs={o.imgs}
            hasStock={o.hasStock}
            price={o.price}
          ></Item>
        );
      })}
    </div>
  );
}
