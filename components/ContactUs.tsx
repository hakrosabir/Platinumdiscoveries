import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineCall } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className="text-center py-8 md:py-20">
      <div className="md:mb-12 mb-8">
        <h1 className="text-[#00008B] text-2xl md:text-3xl mb-4 font-hanson">
          Contact Us
        </h1>
        <p>We are ready to help you.</p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-x-12 gap-y-8 max-w-[40rem] mx-auto font-ubuntu">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-x-2 mb-3">
            <AiOutlineMail size={24} />
            <span className="md:text-2xl">Email Us</span>
          </div>

          <div>
            <a
              href="mailto:platinumtravelsandtour@gmail.com"
              className="text-blue-400"
            >
              platinumtravelsandtour@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-x-2 mb-3">
            <MdOutlineCall size={24} />
            <span className="md:text-2xl">Call Us</span>
          </div>

          <div>
            <a
              href="mailto:platinumtravelsandtour@gmail.com"
              className="text-blue-400"
            >
              +2348106501694
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
