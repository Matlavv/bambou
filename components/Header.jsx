import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center m-4">
      <Link href="/">
        <Image src="/img/logo.png" alt="logo" width={100} height={100} />
      </Link>
      <nav>
        <ul className="flex flex-row justify-evenly">
          <li className="mx-2">
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
          <li className="mx-2">
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
          <li className="mx-2">
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
          <li className="mx-2">
            <Link
              href="https://x.com/bambouworld?t=xM8-PdjuX73OR4UR9iZluA"
              target="_blank"
            >
              <Image src="/img/x.png" alt="x logo" width={25} height={25} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
