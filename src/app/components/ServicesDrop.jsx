import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const servicesNavData = [
  {
    title: 'Registration',
    variants: [
      { name: 'GST', icon: '/tax-icons/gst.png' },
      { name: 'ESI', icon: '/tax-icons/esi.png' },
      { name: 'EPFO', icon: '/tax-icons/epfo.png' },
      { name: 'Aadhar', icon: '/tax-icons/aadhar-card.png' },
      { name: 'Voter ID', icon: '/tax-icons/voter-id.png' },
      { name: 'Passport', icon: '/tax-icons/passport.png' },
      { name: 'PAN Card', icon: '/tax-icons/pan-card.png' },
      { name: 'Firm/Company', icon: '/tax-icons/firm.png' },
    ],
  },
  {
    title: 'Licences',
    variants: [
      { name: 'Trade', icon: '/tax-icons/trade-license.png' },
      { name: 'Food', icon: '/tax-icons/food-license.png' },
      { name: 'Driving', icon: '/tax-icons/driving-license.png' },
      { name: 'Labour', icon: '/tax-icons/labour-license.png' },
    ],
  },
  {
    title: 'IT Filings',
    variants: [
      { name: 'Loans', icon: '/tax-icons/loan.png' },
      { name: 'IT Returns', icon: '/tax-icons/tax-returns.png' },
      { name: 'Insurances', icon: '/tax-icons/insurance.png' },
    ],
  },
  // {
  //   title: 'Other Services',
  //   variants: [
  //     { name: 'Registration 1', icon: '$' },
  //     { name: 'Registration 2', icon: '$' },
  //     { name: 'Registration 3', icon: '$' },
  //     { name: 'Registration 4', icon: '$' },
  //   ],
  // },
]

const ServicesDrop = () => {
  return (
    <>
      <div className='max-w-screen-lg rounded-xl bg-white  shadow-md grid grid-cols-3 p-8'>
        {servicesNavData.map((service, i) => {
          const { title, variants } = service
          return (
            <div key={i}>
              <div className='mr-6'>
                <h2 className='text-xl uppercase font-bold text-black/30 py-3 border-b cursor-default'>
                  {title}
                </h2>
                <ul className=''>
                  {variants.map((variant, i) => (
                    <li
                      key={i}
                      className='py-2 px-1 cursor-pointer hover:bg-blue-100 rounded-md'
                    >
                      <Link
                        href='/gst-registration-v2'
                        className='flex gap-1 text-base font-semibold text-black items-center'
                      >
                        <Image
                          src={variant?.icon}
                          alt={variant?.name}
                          height='48'
                          width='48'
                          className='mr-3'
                        />
                        <span className='text-black'>{variant?.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ServicesDrop
