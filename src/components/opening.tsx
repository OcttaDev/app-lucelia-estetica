import { useNavigate } from "react-router-dom";

export default function Opening() {
  const navigate: (path: string) => void = useNavigate();
  setTimeout(() => {
    navigate("/home");
  }, 5000);
  return (
    <div className="h-full w-full bg-gray-900 bg-[url('/background.png')] bg-contain  z-[99] ">
      <div className="h-full w-full bg-[url('/image-background.png')] bg-contain bg-no-repeat bg-center z-[999] "></div>
    </div>
  );
}
