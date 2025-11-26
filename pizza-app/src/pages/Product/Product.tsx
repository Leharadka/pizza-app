import { Await, useLoaderData } from 'react-router';
import { Product as IProduct } from '../../interfaces/product.interface.ts';
import { Suspense } from 'react';

function Product() {
    const response = useLoaderData() as { data: Promise`<IProduct>` };

    return (
        `<Suspense fallback={<div>Загружаю...</div>}>
            <Await
                resolve={response.data}
                errorElement={<div>Не можем отобразить продукт😬</div>}
            >
                {(data) =>
                    <div>
                        <h1>Product Name: {data.id}</h1>
                    </div>
                }
            </Await>
        </Suspense>`
    );
}

export default Product;