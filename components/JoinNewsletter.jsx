import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const JoinNewsletter = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [checkboxClass, setCheckboxClass] = useState("accent-deep-green");

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    // Reset the checkbox class to its default when checked/unchecked
    setCheckboxClass("accent-deep-green");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (!isChecked) {
      // Set the checkbox class to a red color if not checked
      setCheckboxClass("accent-red-500 ring-2 ring-red-500");
    } else {
      // submission action
    }
  };

  return (
    <div className="bg-deep-green mx-6 my-4 rounded-xl p-4" id="newsletter">
      <h2 className="flex items-center justify-center text-cream font-wak font-bold text-5xl">
        Ne rate aucune info sur Bambou !
      </h2>
      <div className="lg:flex lg:flex-row mt-6">
        <div className="mt-4">
          <p className="text-cream font-gillSans font-bold text-lg">
            Ne rate aucune information sur nos dernières initiatives, événements
            à venir et astuces écologiques en t&apos;abonnant à notre
            newsletter.
          </p>
          <p className="text-cream font-gillSans font-bold text-lg mt-3">
            Rejoins notre communauté et cultivons ensemble un avenir plus vert !
          </p>
        </div>
        <div className="lg:w-2/3 mt-4">
          <input
            type="email"
            placeholder="Ton adresse mail"
            value={email}
            onChange={handleEmailChange}
            className="placeholder-deep-green rounded-lg p-2 bg-cream font-gillSans font-bold text-sm w-full lg:w-2/3"
            style={{ color: "deep-green" }}
          />
          <div className="flex items-center mt-4">
            <Checkbox
              id="subscribeCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className={`${checkboxClass} form-checkbox h-6 w-6 rounded-full border-2 border-cream`}
              style={{
                backgroundColor: "transparent", // Makes the checkbox background transparent
                accentColor: "cream", // This sets the checkbox color when checked
              }}
            />

            <label
              htmlFor="subscribeCheckbox"
              className="text-cream font-gillSans font-bold text-sm ml-2"
            >
              En t&apos;inscrivant à notre newsletter, tu consens à recevoir des
              mises à jour sur nos initiatives et événements. Tu peux te
              désabonner à tout moment.
            </label>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-custom-orange text-deep-green font-gillSans rounded-full px-4 py-2 my-4 text-lg lg:text-xl"
          >
            S&apos;inscrire à la newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinNewsletter;
