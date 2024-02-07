import Container from '../../Container'
import Flex from '../../Flex'
import SubHeading from '../../SubHeading'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'
function AboutPage() {
  const pagename = useSelector((state => state.BreakCum.previousname))
  const brod = (window.location.pathname.replace("/", ""))
  return (
    <section>
    <Container>
    <SubHeading text="About" className="text-49" />
        <Flex className="mt-3  gap-x-2">
          <Link to={pagename=="Home" ? "/" : pagename=="Shop" ? "/shop" : pagename=="signup" ?  "/sign-up" : pagename=="Contacts" && "/contacts"}>
          </Link>
        {pagename}
        <AiOutlineRight className=' mt-[6px] '/>
          <p className=' first-letter:uppercase '>{brod}</p>
        </Flex>
    </Container>
  </section>
  )
}

export default AboutPage
