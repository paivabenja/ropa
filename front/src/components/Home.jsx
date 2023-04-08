import Item from "./Item";
import { useEffect, useState } from "react";
import productos from './prods'


export default function Home() {
  const [clothesStock, setClothesStock] = useState()

  const getClothesStock = () => {
    fetch('http://localhost:8000/api/ropa/', { mode: 'no-cors' })
      .then(r => r.json())
      .then(r => setClothesStock(r))
      .catch(console.log('error amigo'))
  }

  useEffect(() => {
    console.log('first useEffect')
    getClothesStock()
  }, [])
  useEffect(() => console.log('clth stock: ' + clothesStock), [clothesStock])

  return (
    <div className="flex flex-wrap mt-4 m-12 justify-center items-start text-white content-start gap-12 z-10">
      {[0, 1, 2, 3, 4,5,6,7,8,9].map((i) => {
        return (
          <Item
            key={i}
          type={productos[0].type}
          title={productos[0].title}
          sizes={productos[0].sizes}
          imgFront={productos[0].imgFront}
          imgBack={productos[0].imgBack}
          price={productos[0].price}
          stock={productos[0].stock}
          ></Item>
        );
      })}
    </div>
  );
}
