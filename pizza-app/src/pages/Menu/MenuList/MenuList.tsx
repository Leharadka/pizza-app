import ProductCard from '../../../components/ProductCart/ProductCard';
import type { MenuListProps } from './MenuList.props';

export function MenuList({products}: MenuListProps) {
        return products.map(p => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              description={p.ingredients.join(", ")}
              price={p.price}
              rating={p.rating}
              image={p.image}
            />
          ));
}