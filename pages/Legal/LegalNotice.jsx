import Footer from "@/components/Footer";
import Header from "@/components/Header";

const LegalNotice = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-5">
        <h1 className="text-3xl mb-4 text-deep-green font-gillSans">
          Mentions légales
        </h1>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Nom de l&apos;application :</strong>{" "}
          Bambou
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Développeur :</strong> Mathis Laversin
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Contact :</strong>{" "}
          mathis.laversin92@gmail.com
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">
            Adresse mail de l&apos;application :
          </strong>{" "}
          bambouapp.eco@gmail.com
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Hébergeur :</strong>
          <br />
          Firebase (Google LLC)
          <br />
          1600 Amphitheatre Parkway
          <br />
          Mountain View, CA 94043
          <br />
          États-Unis
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Conditions de service :</strong>
          <br />
          Bambou est une application disponible sur le Play Store et respectant
          les conditions de Google.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Propriété intellectuelle :</strong>
          <br />
          Tous les contenus présents sur l&apos;application sont la propriété de
          Bambou ou de ses partenaires. Toute reproduction, représentation,
          modification, publication, adaptation de tout ou partie des éléments
          de l&apos;application, quel que soit le moyen ou le procédé utilisé,
          est interdite, sauf autorisation écrite préalable de Bambou.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">Responsabilité :</strong>
          <br />
          Bambou décline toute responsabilité en cas de dommages liés à
          l&apos;utilisation de l&apos;application, y compris mais sans s&apos;y
          limiter, les pertes de données ou les interruptions de service.
        </p>
        <p className="text-deep-green font-gillSans">
          <strong className="text-xl">
            Modification des mentions légales :
          </strong>
          <br />
          Nous nous réservons le droit de modifier ces mentions légales à tout
          moment. Les modifications seront publiées sur cette page.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default LegalNotice;
