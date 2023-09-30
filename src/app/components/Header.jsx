'use client'

import { BiSolidChevronRight } from 'react-icons/bi'
import CustomButton from './CustomButton'
import Navbar from './Navbar'
import SectionContainer from './SectionContainer'
import { usePathname } from 'next/navigation'
import Carousel from 'nuka-carousel'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
// import clsx from 'clsx'
import { clsx } from 'clsx'

export const params = {
  wrapAround: true,
  defaultControlsConfig: {
    pagingDotsStyle: { padding: '0.5rem', fill: 'white' },
    nextButtonStyle: {
      padding: '0.5rem',
      borderRadius: '50%',
      color: 'red',
      position: 'relative',
      right: '1rem',
    },
    nextButtonText: (
      <GrFormNext
        size={32}
        filter='invert(1)'
      />
    ),
    prevButtonStyle: {
      padding: '0.5rem',
      borderRadius: '50%',
      color: 'red',
      position: 'relative',
      left: '1rem',
    },
    prevButtonText: (
      <GrFormPrevious
        size={32}
        filter='invert(1)'
      />
    ),
  },
}

const renderCenterLeftControls = ({ previousDisabled, previousSlide }) => (
  <button
    className={clsx(
      'text-white invert bg-white/50 rounded-full relative left-4 p-2'
    )}
    disabled={previousDisabled}
    onClick={previousSlide}
    aria-label='Go to previous slide'
  >
    <GrFormPrevious size={32} />
  </button>
)

const renderCenterRightControls = ({ nextDisabled, nextSlide }) => (
  <button
    className={clsx(
      'text-white invert bg-white/50 rounded-full relative right-4 p-2'
    )}
    disabled={nextDisabled}
    onClick={nextSlide}
    aria-label='Go to next slide'
  >
    <GrFormNext size={32} />
  </button>
)

const Header = () => {
  const pathname = usePathname()
  return (
    <main className=''>
      {pathname === '/' && <Navbar />}
      <Carousel
        {...params}
        autoplay
        // renderCenterLeftControls={renderCenterLeftControls}
        // renderCenterRightControls={renderCenterRightControls}
      >
        <div
          className={`bg-[url('https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80')] bg-center object-cover text-white`}
        >
          <SectionContainer>
            <div className='md:pt-30 pt-20 lg:pt-40'>
              <h1 className='pb-20 text-5xl font-bold md:pb-10 md:text-6xl lg:pb-0 lg:text-7xl'>
                Helping Small <br /> Businesses
                <br /> Grow Big
              </h1>
              <CustomButton>
                See how we do it <BiSolidChevronRight />
              </CustomButton>
            </div>
          </SectionContainer>
        </div>
        <div
          className={`bg-[url('https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')] bg-center object-cover text-white`}
        >
          <SectionContainer>
            <div className='md:pt-30 pt-20 lg:pt-40'>
              <h1 className='pb-20 text-5xl font-bold md:pb-10 md:text-6xl lg:pb-0 lg:text-7xl'>
                Helping Small <br /> Businesses
                <br /> Grow Big
              </h1>
              <CustomButton>
                See how we do it <BiSolidChevronRight />
              </CustomButton>
            </div>
          </SectionContainer>
        </div>
        <div
          className={`bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80')] bg-center object-cover text-white`}
        >
          <SectionContainer>
            <div className='md:pt-30 pt-20 lg:pt-40'>
              <h1 className='pb-20 text-5xl font-bold md:pb-10 md:text-6xl lg:pb-0 lg:text-7xl'>
                Helping Small <br /> Businesses
                <br /> Grow Big
              </h1>
              <CustomButton>
                See how we do it <BiSolidChevronRight />
              </CustomButton>
            </div>
          </SectionContainer>
        </div>
      </Carousel>
    </main>
  )
}

export default Header
