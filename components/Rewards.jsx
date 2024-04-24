import Image from "next/image";

const Rewards = () => {
  return (
    // gagne des récompenses
    <div className="lg:flex lg:flex-row m-5 p-8 rounded-xl bg-deep-green items-center justify-center mt-10">
      {/* panda image */}
      <div className="flex-shrink-0 max-sm:flex justify-center">
        <Image
          src={"/img/pandaSurprise.png"}
          width={200}
          height={200}
          alt="panda surprise"
        />
      </div>
      {/* Text part */}
      <div className="flex flex-col justify-center lg:ml-24">
        {" "}
        <h2 className="text-cream text-4xl lg:text-5xl font-wak font-bold max-sm:text-center">
          Gagne des récompenses !
        </h2>
        <p className="text-cream text-xl font-gillSans mt-5 max-sm:text-center">
          Plus tu t&apos;impliques, plus tu gagnes !
        </p>
        <p className="text-cream text-lg font-gillSans font-bold mt-6 max-sm:text-center">
          En participant à des événements écologiques, tu gagnes des points qui
          peuvent être échangés contre des bons d&apos;achat chez nos
          partenaires ou même être convertis en dons pour des associations
          environnementales.
        </p>
      </div>
    </div>
  );
};

export default Rewards;
