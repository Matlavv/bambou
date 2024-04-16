const AppPresentation = () => {
  return (
    <div>
      {/* green container */}
      <div className="bg-deep-green m-4 rounded-xl w-2/3">
        <h1 className="font-wak font-bold text-cream text-4xl m-8">
          L&apos;app qui récompense tes actions écolos !
        </h1>
        <p className="text-cream">
          Organise et participe à des évènements pour un monde plus vert !
          Rejoins une communauté engagée et gagne des récompenses tout en
          contribuant à un monde plus durable pour les générations futures !
        </p>
        <button
          href="#newsletter"
          className="bg-custom-orange text-deep-green font-bold rounded-full px-4 py-2"
        >
          Suivre l&apos;avancement de Bambou
        </button>
      </div>
    </div>
  );
};

export default AppPresentation;
