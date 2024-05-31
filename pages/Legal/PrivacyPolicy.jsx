import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-5">
        <h1 className="text-3xl mb-4 text-deep-green font-gillSans">
          Politique de confidentialité
        </h1>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Introduction</strong>
          <br />
          La présente politique de confidentialité décrit comment
          l&apos;application Bambou collecte, utilise et protège vos
          informations personnelles. En utilisant l&apos;application Bambou,
          vous acceptez les termes de cette politique.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Collecte de données</strong>
          <br />
          Nous collectons les informations suivantes de nos utilisateurs :
          <ul className="list-disc ml-5 text-deep-green font-gillSans">
            <li>Prénom</li>
            <li>Nom d&apos;utilisateur</li>
            <li>Adresse e-mail</li>
            <li>Mot de passe</li>
          </ul>
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Utilisation des données</strong>
          <br />
          Les informations collectées sont utilisées pour :
          <ul className="list-disc ml-5 text-deep-green font-gillSans">
            <li>Créer et gérer votre compte utilisateur.</li>
            <li>Vous inscrire à notre newsletter.</li>
            <li>
              Vous permettre de créer et participer à des événements
              écologiques.
            </li>
            <li>Vous proposer des défis quotidiens et gérer vos crédits.</li>
          </ul>
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Stockage et sécurité des données</strong>
          <br />
          Vos informations personnelles sont stockées de manière sécurisée dans
          Firebase. Nous mettons en œuvre des mesures de sécurité appropriées
          pour protéger vos données contre tout accès non autorisé.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Partage des données</strong>
          <br />
          Bambou ne revend pas vos informations personnelles à des tiers.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong>Paiements</strong>
          <br />
          Les paiements pour les abonnements premium sont effectués via Stripe.
          Bambou ne stocke aucune donnée de paiement.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Vos droits</strong>
          <br />
          Vous avez le droit d&apos;accéder, de rectifier et de supprimer vos
          informations personnelles. Pour exercer ces droits, veuillez nous
          contacter à l&apos;adresse suivante : mathis.laversin92@gmail.com
        </p>
        <p className="text-deep-green font-gillSans">
          <strong>Modifications de la politique de confidentialité</strong>
          <br />
          Nous nous réservons le droit de modifier cette politique de
          confidentialité à tout moment. Les modifications seront publiées sur
          cette page.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
