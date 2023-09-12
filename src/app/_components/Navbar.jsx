import { FaSearch } from 'react-icons/fa'
import { RiShoppingBag2Line } from 'react-icons/ri'
import { TbChartDonutFilled } from 'react-icons/tb'
import SectionContainer from './SectionContainer'

const Navbar = () => {
  return (
    <SectionContainer>
      <nav className='flex justify-between py-4 items-center'>
        <div className='flex gap-4 text-5xl font-bold '>
          <TbChartDonutFilled />
          <p>Financial</p>
        </div>
        <div className='flex justify-between text-xl font-medium gap-6 items-center'>
          <ul className='flex justify-between gap-6'>
            <li>About</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Insights</li>
            <li>Pages</li>
            <li>Contacts</li>
          </ul>
          <FaSearch />
          <RiShoppingBag2Line />
        </div>
      </nav>
    </SectionContainer>
  )
}

export default Navbar
