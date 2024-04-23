import AppPresentation from "@/components/AppPresentation";
import EcologicalLearning from "@/components/EcologicalLearning";
import Footer from "@/components/Footer";
import GoToAction from "@/components/GoToAction";
import Header from "@/components/Header";
import JoinNewsletter from "@/components/JoinNewsletter";
import Rewards from "@/components/Rewards";

export default function Home() {
  return (
    <div>
      <Header />
      <AppPresentation />
      <GoToAction />
      <Rewards />
      <EcologicalLearning />
      <JoinNewsletter />
      <Footer />
    </div>
  );
}
