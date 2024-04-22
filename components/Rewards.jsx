import Image from "next/image";

const Rewards = () => {
  return (
    // gagne des récompenses
    <div className="flex flex-row m-5 p-8 rounded-xl bg-deep-green">
      {/* panda image */}
      <div>
        <Image
          src={"/img/pandaSurprise.png"}
          width={200}
          height={200}
          alt="panda surprise"
        />
      </div>
      {/* Text part */}
      <div>
        <h2 className="text-cream text-3xl font-wak font-bold">
          Gagne des récompenses !
        </h2>
        <p className="text-cream text-xl font-gillSans">
          Plus tu t&apos;impliques, plus tu gagnes !
        </p>
        <p className="text-cream text-lg font-gillSans font-bold">
          En particiant à des événements écologiques, tu gagnes des points qui
          peuvent être échangés contre des bons d&apos;achat chez nos
          partenaires ou même être convertis en dons pour des associations
          environnementales.
        </p>
      </div>
    </div>
  );
};

export default Rewards;
