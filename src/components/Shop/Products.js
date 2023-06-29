import ProductItem from './ProductItem'
import classes from './Products.module.css'

const DUMMY_PRODUCTS = [
	{
		id: 'p1',
		price: 5,
		title: 'Some book',
		description: 'Some book written in English',
	},
	{
		id: 'p2',
		price: 25,
		title: 'T-Shirt',
		description: 'Yellow t-shirt bla bla',
	},
]

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => {
					return (
						<ProductItem
							id={product.id}
							key={product.id}
							title={product.title}
							price={product.price}
							description={product.description}
						/>
					)
				})}
			</ul>
		</section>
	)
}

export default Products
