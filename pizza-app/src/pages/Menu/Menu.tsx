import { useEffect, useState } from "react";
import Headling from "../../components/Headling/Headling";
import ProductCard from "../../components/ProductCart/ProductCard";
import Search from "../../components/Search/Search";
import { PREFIX } from "../../helpers/API";
import type { Product } from "../../interfaces/product.interface";
import styles from "./Menu.module.css";

export function Menu() {
  const [products, setProducts] = useState<Product[]>([]);

  const getmenu = async () => {
    try {
      const res = await fetch(`${PREFIX}/products`);
      if (!res.ok) {
        return;
      }
      const data = (await res.json()) as Product[];
      setProducts(data);
    } catch (e) {
      console.error(e);
      return;
    }
  };

  useEffect(() => {
    getmenu();
  }, []);

  return (
    <>
      <div className={styles["head"]}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            description={p.ingredients.join(", ")}
            price={p.price}
            rating={p.rating}
            image={p.image}
          />
        ))}
      </div>
    </>
  );
}
