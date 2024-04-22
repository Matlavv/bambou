import AppPresentation from "@/components/AppPresentation";
import GoToAction from "@/components/GoToAction";
import Header from "@/components/Header";
import Rewards from "@/components/Rewards";

export default function Home() {
  return (
    <div>
      <Header />
      <AppPresentation />
      <GoToAction />
      <Rewards />
    </div>
  );
}
