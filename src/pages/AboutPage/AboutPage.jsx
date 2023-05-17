import { useStyles } from "./AboutPage.styles";
import { useGlobalStyles } from "../../constants";
import Cartographie from "../../assets/images/carte-entiere(avecPOINTS)-5.jpg";
import SayHelloSection from "../../components/SayHelloSection/SayHelloSection";

const AboutPage = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <main className={globalClasses.container}>
      <div className={classes.aboutContainer}>
        <div className={classes.aboutMeContainer}>
          <div className={classes.aboutMeTextWrapper}>
            <p>
              J’ai commencé ce projet en 2019. Le point de départ fut ma
              rencontre avec les habitants de la maison des migrants, en 2016,
              alors située rue prince royal N°103. Au moment de déménager une
              première fois, après plus de 9 mois d’occupations, certains m’ont
              demandé d’aider. Je suis restée pour aider, je suis restée parce
              que je ne connaissais pas cette réalité vécue par les personnes
              sans-papiers. Je suis restées pour aider, mais aussi pour archiver
              ce que je voyais.
            </p>
            <p>
              Ces lieux entre lieux de vie et lieux de lutte, sont nombreux à
              Bruxelles. Ils sont imposés à leurs habitants.Es, qui n’ont pas le
              choix d’aller ailleurs. (L’absence de stabilité et l’illégalité
              des personnes, empêchent bien souvent l’accès au logement via la
              location). Chacun.e des habitant.tes de ces espaces ont un
              objectif personnel mais commune tous.tes : leur eégularisation.
              Tout le reste, ce n’est que du second plan.
            </p>
            <p>
              Cependant, en apercevant de loin, ces successions de déménagements
              ou plutôt d’expulsions, ces quotidiens de valises et de sacs qui
              ne laissent aucunes traces visibles dans nos villes bruyantes. En
              entr’apercevant cela, je n’ai pas voulu accepter que toutes ces
              histoires n’existent nul part.
            </p>
            <p>
              Ces histoires ne sont pas les miennes, et ce projet ne donne aucun
              avis. Il s’agit d’un outil collectif - participatif - qui sera
              toujours en cours de construction, et de vérification. Il n’est
              pas parfait et comporte des erreurs, des imprécisions.
            </p>
            <p>
              C’est un projet virtuel qui souhaite rendre visible la réalité
              violente vécue par les personnes sans-papiers, essayant de
              survivre dans nos espaces urbains hostiles. Il dénonce, mais il
              met aussi en avant la persévérance et le courage dont ces femmes,
              ces enfants et ces hommes font preuve tous les jours, toutes leurs
              vies, de lutte. Jusque dans leurs espaces intimes.
            </p>
            <p>
              Ce projet ne donne pas d’informations sur les différents
              collectifs ou groupes de Personnes sans-papiers, il Invite à les
              rencontrer en faisant lien vers leurs projets, leurs outils,...
            </p>
            <p>
              Pour finir, ce projet ne fait pas l’état des lieux de toutes les
              occupations à Bruxelles. Ils existent autant de manière d’occuper
              un lieu, qu’il existe de lieux occupés. Ici, il s’agit uniquement
              de lieux Où seuls des personnes sans-papiers résident, et
              s’organisent entre elles. Bien Sûr, il y a toujours des allié.es,
              plus ou moins présents.es dans les décisions et l’organisation de
              la vie collective, ou la signature de documents administratifs.
            </p>
            <p>
              Pour finir, cette balade virtuelle est une invitation à se perdre,
              il n’est pas important de savoir exactement où l’on se trouve.
              Juste oser y entrer et y passer un peu de temps.
            </p>
            <p>
              Vous trouverez un formulaire à compléter si vous souhaitez
              partager une information, faire une modification, un Commentaire,
              un conseil, juste un bonjour ! Merci pour le partage, et Bonne
              Balad.
            </p>
          </div>
          <img
            src={Cartographie}
            alt="Cartographie"
            className={classes.aboutMeImage}
          />
        </div>
      </div>
      <SayHelloSection />
    </main>
  );
};

export default AboutPage;
