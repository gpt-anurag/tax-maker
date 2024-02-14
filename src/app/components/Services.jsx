import { BsDisplay } from "react-icons/bs";
import SectionContainer from "./SectionContainer";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#14322e] to-[#2c5e4a]">
      <SectionContainer>
        <div className="flex flex-col md:flex-row text-black font-bold text-justify text-lg">
        <div className="md:relative md:basis-4/12 ">
            {/* <div className="bottom-24 w-full rounded-xl p-8 shadow-xl md:absolute md:bg-white">
              <h2 className="mb-4 text-4xl font-semibold">What we do?</h2>
              <ul className="mb-3 font-semibold text-primary100 ">
                <li className="mb-1 hover:text-primaryFont">
                  <Link href="/gst-registration">GST Registration</Link>
                </li>
                <li className="mb-1 hover:text-primaryFont">
                  <Link href="/firm-registration">Firm Registration</Link>
                </li>
                <li className="mb-1 hover:text-primaryFont">
                  <Link href="/private-ltd">Private Ltd</Link>
                </li>
                <li className="mb-1 hover:text-primaryFont">
                  <Link href="/food-license">Food License</Link>
                </li>
                <li className="mb-1 hover:text-primaryFont">
                  <Link href="/home-loans">Home Loans</Link>
                </li>
              </ul>
              <Link
                href="/services"
                className="border-b-2 border-primary200 font-semibold text-FontDark200 hover:text-FontDark"
              >
                Other Services
              </Link>
            </div> */}
            {/* <h1> */}
              <Image
              src={'/tax-icons/why_choose.jpg'}
              alt={'why choose us'}
              // width={700}
              // height={700}
              fill
              objectFit="cover"
              // style={{objectFit: "contain"}}
              className='w-full h-full mr-3 self-center object-cover scale-101'
            />
            {/* </h1> */}
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-6 p-8 md:basis-8/12">
            <div>
              <div className="mb-2 flex items-center gap-4 font-semibold">
                {/* <BsDisplay className="text-5xl" /> */}
                {/* <Image
                  src={'/tax-icons/experience.png'}
                  alt={'why choose us'}
                  width={24}
                  height={24}
                  quality={100}
                  className='w-[48px] h-[48px] mr-3 self-center object-cover
                /> */}
                <img src='/tax-icons/satisfaction.png' alt='satisfaction' className='w-[70px] h-[70px]' />
                <p className="text-[1.55rem]">5+ years of experience</p>
              </div>
              <p className="text-black font-bold text-center text-lg text-[1.2rem]">
                We have a proven track record of success in helping businesses get started
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-4">
                {/* <BsDisplay className="shrink-0 text-5xl" />       */}
                <img src='/tax-icons/experience.png' alt='experience' className='w-[70px] h-[70px]' />
                <p className="text-[1.55rem]">Expert guidance</p>
              </div>
              <p className="text-black font-bold  text-center text-lg text-[1.2rem]">
                Our team of experienced professionals understands the intricacies of business registration and licenses in Hyderabad
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-4 font-semibold text-FontDark ">
                {/* <BsDisplay className="text-5xl" /> */}
                <img src='/tax-icons/sunbathing.png' alt='sunbathing' className='w-[70px] h-[70px]' />
                <p className="text-[1.55rem]">Stress-free process</p>
              </div>
              <p className="text-black font-bold  text-center text-lg text-[1.2rem]">
              We take care of all the paperwork and formalities, freeing you up to focus on your business
              </p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-4 font-semibold text-FontDark ">
                {/* <BsDisplay className="text-5xl" /> */}
                <img src='/tax-icons/rupees.png' alt='rupees' className='w-[70px] h-[70px]' />
                <p className="text-[1.55rem]">Affordable rates</p>
              </div>
              <p className="text-black font-bold  text-center text-lg text-[1.2rem]">
              We offer competitive rates to make our services accessible to all entrepreneurs
              </p>
            </div>
          </div>
          
        </div>
      </SectionContainer>
    </section>
  );
};

export default Services;
