import { useState } from "react";

const JoinNewsletter = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setError(false);
    setSuccessMessage("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(false);
    setSuccessMessage("");
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = () => {
    if (!isChecked || !isValidEmail(email)) {
      setError(true);
      setSuccessMessage("");
    } else {
      setSuccessMessage("Merci de nous avoir rejoint !");
      setError(false);
      console.log("Soumission réussie avec l'email :", email);
    }
  };

  const inputClass = `placeholder-deep-green rounded-xl p-2 bg-cream text-sm w-full lg:w-2/3 font-gillSans ${
    error ? "border-red-500 border-2" : ""
  }`;

  return (
    <div className="bg-deep-green mx-6 my-4 rounded-xl p-4" id="newsletter">
      <h2 className="flex items-center justify-center text-cream font-bold text-5xl font-wak max-sm:text-center">
        Ne rate aucune info sur Bambou !
      </h2>
      <div className="lg:flex lg:flex-row mt-6">
        <div className="mt-4">
          <p className="text-cream font-gillSans font-bold text-lg max-sm:text-center">
            Ne rate aucune information sur nos dernières initiatives, événements
            à venir et astuces écologiques en t&apos;abonnant à notre
            newsletter.
          </p>
          <p className="text-cream font-gillSans font-bold text-lg mt-3 max-sm:text-center">
            Rejoins notre communauté et cultivons ensemble un avenir plus vert !
          </p>
        </div>
        <div className="lg:w-2/3 mt-4">
          <input
            type="email"
            placeholder="Ton adresse mail"
            value={email}
            onChange={handleEmailChange}
            className={inputClass}
            style={{ color: "deep-green" }}
          />
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              id="subscribeCheckbox"
              className={`form-checkbox size-6 ${
                error
                  ? "accent-red-500 ring-2 ring-red-500"
                  : "accent-deep-green"
              }`}
              style={{
                backgroundColor: "transparent",
                accentColor: "cream",
              }}
            />
            <label
              htmlFor="subscribeCheckbox"
              className={`font-bold text-sm ml-2  ${
                error ? "text-red-500" : "text-cream"
              }`}
            >
              En t&apos;inscrivant à notre newsletter, tu consens à recevoir des
              mises à jour sur nos initiatives et événements. Tu peux te
              désabonner à tout moment.
            </label>
          </div>
          {successMessage && (
            <p className="text-cream font-gillSans font-bold text-lg mt-3">
              {successMessage}
            </p>
          )}
          <div className="max-sm:flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-custom-orange text-deep-green rounded-full px-4 py-2 my-4 text-lg lg:text-xl font-gillSans"
            >
              S&apos;inscrire à la newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNewsletter;
