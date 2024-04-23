const EcologicalLearning = () => {
  return (
    <div className="mt-8 p-10">
      <h2 className="flex items-center justify-center text-5xl text-deep-green font-wak font-bold text-center">
        Être écolo, ça s&apos;apprend !
      </h2>
      <div className="grid lg:grid-cols-2 mt-12 gap-4">
        {" "}
        <div className="lg:w-2/3 mt-4 p-4">
          <h3 className="text-2xl text-deep-green font-gillSans">
            Nous t’aidons à adopter un mode de vie plus écologique
          </h3>
          <p className="text-lg text-deep-green font-gillSans font-bold mt-5">
            Explore nos articles et conseils pour adopter des habitudes de vie
            plus durables. Que tu sois novice dans le domaine de l&apos;écologie
            ou que tu cherches des moyens d&apos;approfondir ton engagement, tu
            trouveras ici une mine d&apos;informations pour t&apos;aider à faire
            une différence pour la planète.
          </p>
        </div>
        <div className="lg:flex lg:flex-row lg:space-x-4">
          <div className="rounded-xl bg-red-600 lg:w-1/2 h-80 flex flex-col justify-end p-4 my-4 relative">
            <p className="text-cream font-gillSans font-bold z-10 relative">
              Des recettes éco-friendly pour une alimentation durable
            </p>
          </div>
          <div className="rounded-xl bg-yellow-600 lg:w-1/2 h-80 flex flex-col justify-end p-4 my-4 relative">
            <p className="text-deep-green font-gillSans font-bold z-10 relative">
              Réduits ta consommation plastique !
            </p>
          </div>
          <div className="rounded-xl bg-deep-green lg:w-1/2 h-80 flex flex-col justify-end p-4 my-4 relative">
            <p className="text-cream font-gillSans font-bold z-10 relative">
              Guide pour un jardinage écologique
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcologicalLearning;
