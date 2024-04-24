import Image from "next/image";

const EcologicalLearning = () => {
  return (
    <div className="mt-8 p-10">
      <h2 className="flex items-center justify-center text-5xl text-deep-green font-wak font-bold text-center">
        Être écolo, ça s&apos;apprend !
      </h2>
      <div className="grid lg:grid-cols-2 mt-12 gap-4">
        {" "}
        <div className="lg:w-2/3 mt-6 p-4">
          <h3 className="text-2xl text-deep-green font-gillSans max-sm:text-center">
            Nous t’aidons à adopter un mode de vie plus écologique
          </h3>
          <p className="text-lg text-deep-green font-gillSans font-bold mt-5 max-sm:text-center">
            Explore nos articles et conseils pour adopter des habitudes de vie
            plus durables. Que tu sois novice dans le domaine de l&apos;écologie
            ou que tu cherches des moyens d&apos;approfondir ton engagement, tu
            trouveras ici une mine d&apos;informations pour t&apos;aider à faire
            une différence pour la planète.
          </p>
        </div>
        <div className="lg:flex lg:flex-row lg:space-x-4 flex flex-col items-center gap-10">
          <div className="lg:w-1/2 relative">
            <Image
              src={"/img/ARTICLE-COVER1.png"}
              height={250}
              width={250}
              alt="article"
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-1/2 relative">
            <Image
              src={"/img/ARTICLE-COVER2.png"}
              height={250}
              width={250}
              alt="article"
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-1/2 relative">
            <Image
              src={"/img/ARTICLE-COVER3.png"}
              height={250}
              width={250}
              alt="article"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcologicalLearning;
