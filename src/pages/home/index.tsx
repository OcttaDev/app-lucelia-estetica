import { FiPhone } from "react-icons/fi";
import { MdWhatsapp } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { GrMap } from "react-icons/gr";

export default function Home() {
  return (
    <div className="h-[100%] w-full bg-[url('/background.png')] bg-contain  bg-[10%]">
      <div className="w-full h-full flex flex-col items-center">
        <img src="/vector.png" alt="vector" className="w-56 h-56" />
        <img
          src="/brand.png"
          alt="brand"
          className="w-96 h-96 absolute top-10"
        />
        <img
          src="/description.png"
          alt="brand"
          className="w-48 h-48 absolute top-60"
        />
        <div className="flex items-center gap-5 absolute top-[380px] z-[99]">
          <a
            href="tel:+5519984471084"
            className="flex justify-center items-center w-16 h-16 bg-[#ad7d59] rounded-full"
          >
            <FiPhone size={30} color="#ffff" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5519984471084&text&type=phone_number&app_absent=0"
            className="flex justify-center items-center w-16 h-16 bg-[#ad7d59] rounded-full"
          >
            <MdWhatsapp size={30} color="#ffff" />
          </a>
          <a
            href="mailto:luceliagaldinobiomed@gmail.com?subject=Quero%20fazer%20uma%20consulta&body=Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra%20Lucelia%20Galdino"
            className="flex justify-center items-center w-16 h-16 bg-[#ad7d59] rounded-full"
          >
            <AiOutlineMail size={30} color="#ffff" />
          </a>
          <a
            href="https://www.google.com/maps/place/R.+Cel.+Jos%C3%A9+Proc%C3%B3pio,+634+-+Perp%C3%A9tuo+Socorro,+S%C3%A3o+Jo%C3%A3o+da+Boa+Vista+-+SP,+13870-735/@-21.980363,-46.7960844,17z/data=!3m1!4b1!4m6!3m5!1s0x94c9cb72a1b48863:0xd4c8874c407659c3!8m2!3d-21.980363!4d-46.7960844!16s%2Fg%2F11f3vqry7f?entry=ttu"
            className="flex justify-center items-center w-16 h-16 bg-[#ad7d59] rounded-full"
          >
            <GrMap size={30} color="#ffff" />
          </a>
        </div>
        <img
          src="/action.png"
          alt="action"
          className="w-40 h-40 absolute top-[390px]"
        />

        <img
          src="/contact.png"
          alt="action"
          className="w-32 h-32 absolute top-[520px]"
        />
      </div>
      <img
        src="/footer.png"
        alt=""
        className="absolute bottom-0 w-full h-[250px]"
      />
    </div>
  );
}
