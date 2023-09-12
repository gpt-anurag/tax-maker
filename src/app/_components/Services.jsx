import { BsDisplay } from 'react-icons/bs'
import SectionContainer from './SectionContainer'

const Services = () => {
  return (
    <section className='py-6'>
      <SectionContainer>
        <div className='flex text-primaryFont'>
          <div className='basis-8/12 grid gap-4 p-8 grid-rows-2 grid-cols-2'>
            <div className=''>
              <div className='text-FontDark text-lg mb-2 flex gap-4 items-center font-semibold '>
                <BsDisplay className='text-5xl' />
                <p className=''>Strategy</p>
              </div>
              <p className='text-primaryFont'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, tempore.
              </p>
            </div>
            <div className=''>
              <div className='text-FontDark text-lg mb-2 flex gap-4 items-center font-semibold '>
                <BsDisplay className='text-5xl' />
                <p className=''>Strategy</p>
              </div>
              <p className='text-primaryFont'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, tempore.
              </p>
            </div>
            <div className=''>
              <div className='text-FontDark text-lg mb-2 flex gap-4 items-center font-semibold '>
                <BsDisplay className='text-5xl' />
                <p className=''>Strategy</p>
              </div>
              <p className='text-primaryFont'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, tempore.
              </p>
            </div>
            <div className=''>
              <div className='text-FontDark text-lg mb-2 flex gap-4 items-center font-semibold '>
                <BsDisplay className='text-5xl' />
                <p className=''>Strategy</p>
              </div>
              <p className='text-primaryFont'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, tempore.
              </p>
            </div>
          </div>
          <div className='basis-4/12 relative'>
            <div className='p-8 bg-white rounded absolute bottom-24 shadow-xl w-full'>
              <h2 className='text-4xl font-semibold mb-4'>What we do?</h2>
              <ul className='text-lg text-primary100 font-semibold mb-3 '>
                <li className='mb-1 hover:text-primaryFont'>
                  <a href='#'>Financial Services</a>
                </li>
                <li className='mb-1 hover:text-primaryFont'>
                  <a href='#'>Education</a>
                </li>
                <li className='mb-1 hover:text-primaryFont'>
                  <a href='#'>Energy & Environment</a>
                </li>
                <li className='mb-1 hover:text-primaryFont'>
                  <a href='#'>Financial Institutions</a>
                </li>
                <li className='mb-1 hover:text-primaryFont'>
                  <a href='#'>Health Care Payers & Providers</a>
                </li>
                <li className='mb-1 hover:text-primaryFont'>
                  <a href='#'>Medical Devices & Technology</a>
                </li>
              </ul>
              <a href='#' className='border-b-2 border-primary200'>
                All industries
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default Services
