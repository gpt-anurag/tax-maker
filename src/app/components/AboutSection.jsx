import CustomButton from './CustomButton'
import SectionContainer from './SectionContainer'

const AboutSection = () => {
  return (
    <section className='border-t border-gray-300/50'>
      <SectionContainer>
        <div className='flex justify-between items-center gap-10 py-10'>
          <div className='basis-5/12'>
            <h2 className='text-FontDark text-5xl font-semibold mb-8'>
              Why our <br /> consulting?
            </h2>
            <p className='text-primaryFont'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              totam autem quibusdam alias eos et optio, repellendus assumenda
              nesciunt fugiat?
            </p>
            <CustomButton>About Us</CustomButton>
          </div>
          <div className='basis-7/12 w-full'>
            <img
              src='https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              alt='accent image'
              className='w-full object-cover rounded'
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default AboutSection
