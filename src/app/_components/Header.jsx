import { BiSolidChevronRight } from 'react-icons/bi'
import CustomButton from './CustomButton'
import Navbar from './Navbar'
import SectionContainer from './SectionContainer'

const Header = () => {
  return (
    <main className="bg-[url('./assets/banner-img2.jpg')] object-cover bg-center ">
      <div className='border-b border-gray-500/50'>
        <Navbar />
      </div>
      <SectionContainer>
        <div className='mt-40'>
          <h1 className='text-7xl font-bold'>
            Helping Small <br /> Businesses <br /> Grow Big
          </h1>
          <CustomButton>
            See how we do it <BiSolidChevronRight />
          </CustomButton>
        </div>
      </SectionContainer>
    </main>
  )
}

export default Header
