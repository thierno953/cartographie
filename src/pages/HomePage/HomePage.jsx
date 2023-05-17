import Carte from "../../components/Carte/Carte";
import SayHelloSection from "../../components/SayHelloSection/SayHelloSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import { useGlobalStyles } from "../../constants";

const HomePage = () => {
  const globalClasses = useGlobalStyles();

  return (
    <main className={globalClasses.container}>
      <WelcomeSection />
      <Carte />
      <SayHelloSection />
    </main>
  );
};

export default HomePage;
