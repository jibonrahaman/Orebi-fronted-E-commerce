import Container from '../../Container'
import Flex from '../../Flex'
import SubHeading from '../../SubHeading'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'
import BreadCrum from '../BreadCrum'
function AboutPage() {
 
  return (
    <section>
    <Container>
    <SubHeading text="About" className="text-49" />
    <BreadCrum/>
    </Container>
  </section>
  )
}

export default AboutPage
