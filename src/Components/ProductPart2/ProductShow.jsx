import Product2 from './Product2'
import Flex from '../../Flex'
import Container from '../../Container';
function ProductShow() {
  return (
    <section>
     
 
   <Container>
   <Flex>
          <Product2 productPrice="44.00" productName="Product1"/>
          <Product2 productPrice="44.00" productName="Product2"/>
          <Product2 productPrice="44.00" productName="Product3"/>
          <Product2 productPrice="44.00" productName="Product4"/>
      </Flex>
   </Container>
 
      
    </section>
  )
}

export default ProductShow
