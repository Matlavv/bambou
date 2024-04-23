import Image from "next/image";

const GoToAction = () => {
  return (
    <div className="grid mt-10 justify-items-center">
      {/* Title */}
      <div className="flex items-center justify-center">
        <h2 className="text-5xl lg:text-6xl text-deep-green font-bold font-wak">
          Passe à l&apos;action !
        </h2>
      </div>
      {/* First image container */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 p-10 items-center mt-6">
        <Image
          src={"/img/tree-planting.png"}
          width={500}
          height={500}
          alt="tree planting"
          className="justify-self-center"
        />
        <div className="lg:w-3/4">
          <h3 className="text-deep-green font-gillSans text-2xl max-sm:text-center">
            Participe à des évènements écologiques
          </h3>
          {/* Event description */}
          <p className="text-lg text-deep-green font-gillSans my-4 font-bold max-sm:text-center">
            Prêt à passer à l&apos;action pour un monde plus vert ?
          </p>
          {/* More details */}
          <p className="text-lg text-deep-green font-gillSans font-bold max-sm:text-center">
            Que ce soit un nettoyage de plage, une randonnée écolo ou un atelier
            de recyclage, chaque action compte.
          </p>
        </div>
      </div>
      {/* Second image container */}
      <div className="grid lg:grid-cols-2 gap-10 p-8 items-center relative">
        <div className="lg:w-3/4 justify-self-end">
          <h3 className="text-deep-green font-gillSans text-2xl max-sm:text-center">
            Organise ton propre évènement !
          </h3>
          <p className="text-lg text-deep-green font-gillSans my-4 font-bold max-sm:text-center">
            Avec Bambou, une fois ton profil certifié, tu peux facilement
            planifier et promouvoir ton propre évènement.
          </p>
        </div>
        <div className="relative">
          {/* Image of sea cleaning */}
          <Image
            src={"/img/sea-cleaning.png"}
            width={500}
            height={500}
            alt="Sea cleaning"
            className="lg:ml-5"
          />
          {/* Panda Badge */}
          <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 -rotate-12">
            <Image
              src={"/img/pandaStrong.png"}
              width={150}
              height={150}
              alt="panda badge"
              className="max-md:size-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoToAction;
