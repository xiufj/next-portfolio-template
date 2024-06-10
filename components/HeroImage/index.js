import Image from "next/image";
import Laptop from "../../public/images/laptop.png";
import Illustration from "../../public/images/man-with-guitar.png";

export default function ColinImage() {
  return (
    <div className="relative mx-auto max-w-[90%] md:w-[450px] md:max-w-full">
      <Image
        alt="A 3D illustration of a young man playing an acoustic guitar"
        className="-scale-x-1 h-auto w-full pl-[10%] shake-animation"
        priority
        src={Illustration}
      />
      <div className="absolute  bottom-0 left-0 w-[45%] md:max-w-full shake-animation2">
        <Image alt="A 3D illustration of a laptop" src={Laptop} />
      </div>
    </div>
  );
}
