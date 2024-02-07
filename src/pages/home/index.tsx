import { FiPhone } from "react-icons/fi";
import { MdWhatsapp } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { GrMap } from "react-icons/gr";

export default function Home() {
  return (
    <div className="h-[100%] w-full bg-[url('/background.png')] bg-contain  bg-[10%]">
      <div className="w-full h-full flex flex-col items-center">
        <img src="/vector.png" alt="vector" className="w-40 h-40" />
        <img
          src="/brand.png"
          alt="brand"
          className="w-80 h-80 absolute top-0"
        />
        <img
          src="/description.png"
          alt="brand"
          className="w-40 h-40 absolute top-44"
        />
        <div className="flex items-center gap-5 absolute top-[290px]">
          <a
            href=""
            className="flex justify-center items-center w-14 h-14 bg-[#ad7d59] rounded-full"
          >
            <FiPhone size={30} color="#ffff" />
          </a>
          <a
            href=""
            className="flex justify-center items-center w-14 h-14 bg-[#ad7d59] rounded-full"
          >
            <MdWhatsapp size={30} color="#ffff" />
          </a>
          <a
            href=""
            className="flex justify-center items-center w-14 h-14 bg-[#ad7d59] rounded-full"
          >
            <AiOutlineMail size={30} color="#ffff" />
          </a>
          <a
            href=""
            className="flex justify-center items-center w-14 h-14 bg-[#ad7d59] rounded-full"
          >
            <GrMap size={30} color="#ffff" />
          </a>
        </div>
        <div className="absolute top-[300px] flex flex-col ">
          <img src="/action.png" alt="action" className="w-40 h-40" />
          <img
            src="/contact.png"
            alt="action"
            className="w-80 absolute top-32"
          />
        </div>
      </div>
      <img
        src="/footer.png"
        alt=""
        className="absolute bottom-0 w-full h-[200px]"
      />
    </div>
  );
}
