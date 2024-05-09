import Product1 from './assets/Product1.png'
import Product2 from './assets/Product2.png'
import Product3 from './assets/Product3.png'
import Product4 from './assets/Product4.png'
import Product5 from './assets/Product5.png'
import Product6 from './assets/Product6.png'
import Product7 from './assets/Product7.png'
import Product8 from './assets/Product8.png'
import Product9 from './assets/Product9.png'
import Product10 from './assets/Product10.png'
import Product11 from './assets/Product11.png'
import Product12 from './assets/Product12.png'
import Slides from './Components/SlidesPage/Slides'

export default function StoreImg() {
    return (
        <div>
            <Slides src={Product1} alt={Product1} price="44" title="Product 1" />
            <Slides src={Product2} alt={Product2} price="44" title="Product 2" />
            <Slides src={Product3} alt={Product3} price="44" title="Product 3" />
            <Slides src={Product4} alt={Product4} price="44" title="Product 4" />
            <Slides src={Product5} alt={Product5} price="44" title="Product 5" />
            <Slides src={Product6} alt={Product6} price="44" title="Product 6" />
            <Slides src={Product7} alt={Product7} price="44" title="Product 7" />
            <Slides src={Product8} alt={Product8} price="44" title="Product 8" />
            <Slides src={Product9} alt={Product9} price="44" title="Product 9" />
            <Slides src={Product10} alt={Product10} price="44" title="Product 10" />
            <Slides src={Product11} alt={Product11} price="44" title="Product 11" />
            <Slides src={Product12} alt={Product12} price="44" title="Product 12" />
        </div>
    )
}
