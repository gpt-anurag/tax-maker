import { BsDisplay } from "react-icons/bs";
import SectionContainer from "./SectionContainer";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-6">
      <SectionContainer>
        <div className="flex flex-col text-primaryFont md:flex-row">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 p-8 md:basis-8/12">
            <div>
              <div className="mb-2 flex items-center gap-4 font-semibold text-FontDark ">
                <BsDisplay className="text-5xl" />
                <p className="text-xl">Engage</p>
              </div>
              <p className="text-primaryFont">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, tempore.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-4 font-semibold text-FontDark ">
                <BsDisplay className="shrink-0 text-5xl" />
                <p className="text-xl">Documents</p>
              </div>
              <p className="text-primaryFont">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, tempore.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-4 font-semibold text-FontDark ">
                <BsDisplay className="text-5xl" />
                <p className="text-xl">Process</p>
              </div>
              <p className="text-primaryFont">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, tempore.
              </p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-4 font-semibold text-FontDark ">
                <BsDisplay className="text-5xl" />
                <p className="text-xl">Deliver</p>
              </div>
              <p className="text-primaryFont">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, tempore.
              </p>
            </div>
          </div>
          <div className="md:relative md:basis-4/12 ">
            <div className="bottom-24 w-full rounded-xl p-8 shadow-xl md:absolute md:bg-white">
              <h2 className="mb-4 text-4xl font-semibold">What we do?</h2>
              <ul className="mb-3 font-semibold text-primary100 ">
                <li className="mb-1 hover:text-primaryFont">
                  text-xl <Link href="/gst-registration">GST Registration</Link>
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
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Services;
