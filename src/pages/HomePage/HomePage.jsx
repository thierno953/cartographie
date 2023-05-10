import BlogPostsSection from "../../components/BlogPostsSection/BlogPostsSection";
import Carte from "../../components/Carte/Carte";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import { useGlobalStyles } from "../../constants";

const HomePage = () => {
  const globalClasses = useGlobalStyles();

  return (
    <main className={globalClasses.container}>
      <WelcomeSection />
      <Carte />
      <BlogPostsSection />
    </main>
  );
};

export default HomePage;
