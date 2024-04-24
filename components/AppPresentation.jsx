import Image from "next/image";
import Link from "next/link";

const AppPresentation = () => {
  return (
    <div className="relative grid lg:grid-cols-4 z-0 mt-6">
      {/* Green container - prend 3/4 de l'écran sur grands écrans */}
      <div className="xl:col-span-3 lg:col-span-4 bg-deep-green mx-5 my-4 rounded-xl z-10">
        <div className="p-8">
          <h1 className="font-wak font-bold text-cream text-5xl lg:text-7xl my-4 max-sm:text-center">
            L&apos;app qui récompense tes actions écolos !
          </h1>
          <p className="text-cream my-4 text-xl lg:text-2xl mt-10 max-sm:text-center font-gillSans font-bold">
            Organise et participe à des évènements pour un monde plus vert !
            Rejoins une communauté engagée et gagne des récompenses tout en
            contribuant à un monde plus durable pour les générations futures !
          </p>
          <div className="max-sm:flex justify-center mt-10">
            <Link href="#newsletter">
              <button className="bg-custom-orange text-deep-green font-gillSans rounded-full lg:px-4 px-3 py-2 text-base lg:text-xl">
                Suivre l&apos;avancement de Bambou
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Panda Badge */}
      <div className="absolute xl:top-0 xl:bottom-1/2 xl:left-3/4 transform xl:-translate-x-2/3 xl:translate-y-full z-20 rotate-12 -top-6 -left-4">
        <Image
          src={"/img/pandaReady.png"}
          width={200}
          height={200}
          alt="panda badge"
          className="max-lg:size-32"
        />
      </div>
      {/* Image container - prend 1/4 de l'écran sur grands écrans */}
      <div className="relative lg:col-span-1 hidden xl:block my-4 z-10">
        <Image
          src={"/img/bambouForest.png"}
          width={300}
          height={300}
          objectFit="cover"
          className="rounded-xl"
          alt="bambou forest"
        />
      </div>
    </div>
  );
};

export default AppPresentation;
