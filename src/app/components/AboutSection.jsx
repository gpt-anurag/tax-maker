import Image from 'next/image'
import CustomButton from './CustomButton'
import SectionContainer from './SectionContainer'

const AboutSection = ({ title, id }) => {
  return (
    // <section className='py-4 bg-gradient-to-b from-[#fff] to-[#2ac3f4]' id={id}>
    <section className='py-4  bg-[#0f1136]' id={id}>
      <SectionContainer>
        <div className='flex flex-col-reverse gap-10 py-10 md:flex-row md:items-center md:justify-between text-white'>
          <div className='md:basis-5/12'>
            <h2 className='mb-8 text-5xl font-semibold'>{title}</h2>
            <p className='font-bold text-justify text-lg'>
              Tax Maker is a customer-focused Indian consultancy, specializing
              in diverse financial and regulatory services. Their experienced
              team ensures compliance with ever-changing tax laws, offering
              services like income tax filing, GST and PF registration, ESI
              compliance, and more. With a commitment to expertise, efficiency,
              and tailored solutions, Tax Maker remains the go-to partner for
              navigating the complexities of taxation and compliance with
              confidence.
            </p>
            <CustomButton>Contact Us</CustomButton>
          </div>
          <div className='md:w-full md:basis-7/12'>
            <img
              // src="https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              src={'/tax-icons/about_us.jpg'}
              alt='accent image'
              className='w-full rounded object-cover'
            />
            {/* <Image 
            src={'/tax-icons/about_us.jpg'}
            alt = 'about us'
            fill
            style={{objectFit: "contain"}}
            // className="w-full rounded object-contain"
            /> */}
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default AboutSection
