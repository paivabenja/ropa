import Item from "./Item";
import { useEffect, useState } from "react";
import productos from "./prods";

export default function Home() {
  const [clothesStock, setClothesStock] = useState([]);

  const getClothesStock = () => {
    fetch("http://localhost:8000/api/ropa/", { mode: "cors" })
      .then((r) => r.json())
      .then((r) => {
        console.log("response: " + r);
        return r;
      })
      .then((r) => setClothesStock(r))
      .catch(console.log("error amigo"));
  };

  useEffect(() => {
    console.log("first useEffect");
    getClothesStock();
  }, []);

  useEffect(() => console.log("clth stock: " + clothesStock), [clothesStock]);

  return (
    <div className="flex flex-wrap mt-4 m-12 justify-center items-start text-white content-start gap-12 z-10">
      {clothesStock.map((o, i) => {
        console.log("console.log de clothesStock: ", clothesStock);
        return (
          <Item
            key={i}
            type={o.type}
            title={o.title}
            sizes={o.sizes}
            imgFront={o.imgFront}
            imgBack={o.imgBack}
            price={o.price}
            hasStock={o.hasStock}
          ></Item>
        );
      })}
    </div>
  );
}
