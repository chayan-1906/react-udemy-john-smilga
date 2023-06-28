import products from "../data.jsx"
import {Link} from "react-router-dom"

const Products = () => {
    return (
        <section className='section'>
            <div className='products'>
                {
                    products.map((product) => {
                        return (
                            <article key={product.id}>
                                <h5>{product.name}</h5>
                                <Link to={`/products/${product.id}`}>more info</Link>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Products
