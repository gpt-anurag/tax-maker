import Image from 'next/image'
import SectionContainer from '../components/SectionContainer'

const AboutPage = () => {
  return (
    <SectionContainer>
      <section className='my-10 grid grid-cols-6 gap-8 text-lg'>
        <h1 className='col-span-6 text-center mb-10 font-bold text-4xl font-hanumanFont'>
          TAX MAKER COMPANY
        </h1>
        <Image
          src={'/accent-image-1.jpg'}
          height={400}
          width={400}
          className='col-span-2 rounded-lg pb-6'
          alt='accent image'
        />
        <div className='col-span-4 space-y-4  pb-6'>
          <h2 className='font-bold text-3xl font-hanumanFont text-black/70'>
            Tax Savvy Made Easy | Your Success is Our Goal
          </h2>
          <p>
            <b>Looking for expert tax guidance?</b> Tax Maker is here to help!
            Based in India, we offer customized solutions for businesses of all
            sizes, from startups to multinational corporations. Our dedicated
            team of professionals simplifies the complexities of tax regulations
            and compliance, so you can focus on what matters most: running your
            business.
          </p>
          <p>
            {`Join us at Tax Maker and experience the difference. Let's make tax
            savvy your key to success!`}
          </p>
        </div>
        <div className='col-span-4'>
          <h2 className='font-bold text-3xl font-hanumanFont text-black/70'>
            Your One-Stop Shop for Business Success in TELANGANA
          </h2>
          <ul className='list-disc space-y-4 py-4 pl-8'>
            <li>
              <b>5+ years of experience:</b> We have a proven track record of
              success in helping businesses get started.
            </li>
            <li>
              <b>Expert guidance:</b> Our team of experienced professionals
              understands the intricacies of business registration and licenses
              in Hyderabad.
            </li>
            <li>
              <b>Stress-free process:</b> We take care of all the paperwork and
              formalities, freeing you up to focus on your business.
            </li>
            <li>
              <b>Affordable rates:</b> We offer competitive rates to make our
              services accessible to all entrepreneurs.
            </li>
          </ul>
        </div>
        <Image
          src={'/tax-icons/telangana-logo.svg'}
          height={400}
          width={400}
          className='col-span-2 rounded-lg'
          alt='accent image'
        />
        <p className='col-span-6 font-bold text-2xl text-center'>
          Ready to start your dream business? Contact Tax Maker Company today
          for a free consultation!
        </p>
      </section>
    </SectionContainer>
  )
}

export default AboutPage
