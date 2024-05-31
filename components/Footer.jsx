import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="lg:flex lg:flex-row lg:justify-center m-10 lg:space-x-28">
      <div className="flex justify-center w-full lg:w-auto lg:block">
        <Image src={"/img/logo.png"} width={150} height={150} alt="logo" />
      </div>
      <nav className="mt-7 lg:mt-0 lg:ml-10">
        <Link href="/about">
          <p className="text-deep-green font-gillSans my-2 text-center lg:text-left">
            Mentions légales
          </p>
        </Link>
        <Link href="/about">
          <p className="text-deep-green font-gillSans my-2 text-center lg:text-left">
            Conditions d&apos;utilisation
          </p>
        </Link>
        <Link href="/about">
          <p className="text-deep-green font-gillSans my-2 text-center lg:text-left">
            Politique de confidentialité
          </p>
        </Link>
      </nav>
      <nav className="mt-7 lg:mt-0 lg:ml-10">
        <h3 className="text-deep-green font-gillSans my-2 text-center lg:text-left">
          Nous contacter
        </h3>
        <ul className="flex flex-row justify-evenly mt-5 space-x-2">
          <li>
            <Link
              href="https://www.tiktok.com/@bambou.france?_t=8mkc3E5CtYO&_r=1"
              target="_blank"
            >
              <Image
                src="/img/tiktok.png"
                alt="tiktok logo"
                width={23}
                height={23}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/bambou.france/"
              target="_blank"
            >
              <Image
                src="/img/insta.png"
                alt="instagram logo"
                width={25}
                height={25}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/company/bambou-france/about/"
              target="_blank"
            >
              <Image
                src="/img/linkedin.png"
                alt="linkedin logo"
                width={25}
                height={25}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://x.com/bambouworld?t=xM8-PdjuX73OR4UR9iZluA"
              target="_blank"
            >
              <Image src="/img/x.png" alt="x logo" width={25} height={25} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
