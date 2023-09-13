import { BiSolidChevronRight } from 'react-icons/bi'
import CustomButton from './CustomButton'
import Navbar from './Navbar'
import SectionContainer from './SectionContainer'
// import bgImg from '../_assets/banner-img2.jpg'

const Header = () => {
  return (
    <main
      className={`bg-[url('https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80')] object-cover bg-center`}
    >
      <div className='border-b border-gray-500/50'>
        <Navbar />
      </div>
      <SectionContainer>
        <div className='mt-40'>
          <h1 className='text-7xl font-bold'>
            Helping Small <br /> Businesses
            <br /> Grow Big
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
