import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="lg:flex lg:flex-row lg:justify-between m-10">
      <div className="flex justify-center w-full lg:w-auto lg:block">
        <Image src={"/img/logo.png"} width={150} height={150} alt="logo" />
      </div>
      <nav className="mt-7 lg:mt-0">
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
    </div>
  );
};

export default Footer;
