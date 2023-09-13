import SectionContainer from './SectionContainer'
import { FaPhone, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { GrFacebookOption } from 'react-icons/gr'

const Contact = () => {
  return (
    <section className='bg-primary100'>
      <SectionContainer>
        <div className='flex justify-between py-2'>
          <p className=''>New York City Financial Advisor</p>
          <div className='flex gap-10'>
            <div className='flex items-center'>
              <FaPhone />
              <p className='ml-2'>+91-1234567890</p>
            </div>
            <div className='flex items-center'>
              <HiMail />
              <p className='ml-2'>office@example.com</p>
            </div>
            <div className='flex items-center'>
              <p className='mr-2'>Follow</p>
              <div className='flex'>
                <GrFacebookOption />
                <FaLinkedinIn />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default Contact
