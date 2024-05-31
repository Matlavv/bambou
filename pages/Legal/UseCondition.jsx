import Footer from "@/components/Footer";
import Header from "@/components/Header";

const UseCondition = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-5">
        <h1 className="text-3xl mb-4 text-deep-green font-gillSans">
          Conditions d&apos;utilisation
        </h1>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Introduction</strong>
          <br />
          Les présentes conditions d&apos;utilisation régissent
          l&apos;utilisation de l&apos;application Bambou. En utilisant Bambou,
          vous acceptez ces conditions.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Accès et utilisation</strong>
          <br />
          Bambou est disponible en téléchargement gratuit sur le Play Store.
          L&apos;utilisation de l&apos;application est gratuite, avec une option
          d&apos;abonnement premium.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Abonnements Premium</strong>
          <br />
          Les utilisateurs peuvent souscrire à un abonnement premium moyennant
          un paiement mensuel via Stripe. Bambou ne stocke pas les données de
          paiement.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">
            Création et participation aux événements
          </strong>
          <br />
          Les utilisateurs peuvent créer des événements écologiques et
          s&apos;inscrire pour y participer via l&apos;application.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Défis et crédits</strong>
          <br />
          Bambou propose des défis quotidiens permettant de gagner des crédits.
          Ces crédits peuvent être échangés contre des bons d&apos;achat ou des
          codes promo auprès de partenaires, ou convertis en euros à donner à
          une association.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Contenu</strong>
          <br />
          Bambou propose des articles et de l&apos;actualité écologique. Les
          utilisateurs peuvent lire ces articles via l&apos;application ou la
          newsletter.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Propriété intellectuelle</strong>
          <br />
          Tous les contenus présents sur l&apos;application sont la propriété de
          Bambou ou de ses partenaires. Toute reproduction, représentation,
          modification, publication, adaptation de tout ou partie des éléments
          de l&apos;application, quel que soit le moyen ou le procédé utilisé,
          est interdite, sauf autorisation écrite préalable de Bambou.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Responsabilité</strong>
          <br />
          Bambou décline toute responsabilité en cas de dommages liés à
          l&apos;utilisation de l&apos;application, y compris mais sans s&apos;y
          limiter, les pertes de données ou les interruptions de service.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">
            Modification des conditions d&apos;utilisation
          </strong>
          <br />
          Nous nous réservons le droit de modifier ces conditions
          d&apos;utilisation à tout moment. Les modifications seront publiées
          sur cette page.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default UseCondition;
