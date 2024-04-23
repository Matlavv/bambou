import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="lg:flex lg:flex-row lg:justify-between my-10 mx-10 ">
      <Image src={"/img/logo.png"} width={150} height={150} alt="logo" />
      <nav>
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
