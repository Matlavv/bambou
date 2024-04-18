import Image from "next/image";

const AppPresentation = () => {
  return (
    <div className="grid lg:grid-cols-4">
      {/* green container - prend 3/4 de l'écran sur large écrans */}
      <div className="lg:col-span-3 bg-deep-green mx-5 my-4 rounded-xl">
        <div className="p-8">
          <h1 className="font-wak font-bold text-cream text-5xl lg:text-7xl my-4">
            L&apos;app qui récompense tes actions écolos !
          </h1>
          <p className="text-cream my-4 text-xl lg:text-2xl mt-10">
            Organise et participe à des évènements pour un monde plus vert !
            Rejoins une communauté engagée et gagne des récompenses tout en
            contribuant à un monde plus durable pour les générations futures !
          </p>
          <button
            href="#newsletter"
            className="bg-custom-orange text-deep-green font-bold rounded-full px-4 py-2 my-4 mt-10 text-lg lg:text-xl"
          >
            Suivre l&apos;avancement de Bambou
          </button>
        </div>
      </div>
      {/* img container - prend 1/4 de l'écran sur large écrans */}
      <div className="relative lg:col-span-1 hidden lg:block mx-5 my-4 rounded-xl">
        <Image
          src={"/img/bambouForest.png"}
          width={320}
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
