import "../styles/Home.css";
import productos from "./prods.js";
import Item from "./Item";

export default function Home() {
  console.log(productos[0].imgFront);
  return (
    <div className="home">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
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
