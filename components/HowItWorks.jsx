import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="text-center">
      <h2 className="font-wak text-deep-green text-5xl lg:text-6xl font-bold">
        Comment ça marche ?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 mt-6">
        <div className="flex flex-col items-center">
          <Image
            src={"/img/enviroment.png"}
            width={200}
            height={200}
            alt="image of a tree planted"
            className="mb-4"
          />
          <p className="text-deep-green font-sans font-bold text-2xl w-44">
            Participe à un évènement
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/img/qr_code.png"}
            width={200}
            height={200}
            alt="image of a qr code"
            className="mb-4"
          />
          <p className="text-deep-green font-sans font-bold text-2xl w-56">
            Scanne le QR code sur place
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/img/points.png"}
            width={200}
            height={200}
            alt="image of credits from the app"
            className="mb-4"
          />
          <p className="text-deep-green font-sans font-bold text-2xl w-44">
            Récupère tes points !
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
