import { useGlobalStyles } from "../../constants";
import { useStyles } from "./BlogPostsSection.styles";
import { Link } from "react-router-dom";

const BlogPostsSection = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <div className={classes.blogPostsContainer}>
      <h2 className={classes.title}>Plus d'informations sur la Carte :</h2>
      <div className={classes.blogPostsWrapper}>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/afghansTrone">
            <h5 className={globalClasses.h5}>Rue du Trone 127, 1050 Ixelles</h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/afghansCharleroi">
            <h5 className={globalClasses.h5}>
              Chaussée de Charleroi 54, 1060 Saint Gilles
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/afghansPost">
            <h5 className={globalClasses.h5}>
              Rue de la Poste 91, 1030 Schaerbeek
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/afghansBeguinage">
            <h5 className={globalClasses.h5}>
              Place du Béguinage 2062, 1000 Bruxelles
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/afgSteCroix">
            <h5 className={globalClasses.h5}>
              Place Sainte Croix, 1050 Ixelles
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/balmoral">
            <h5 className={globalClasses.h5}>
              Rue Saint-Georges 10-20, 1050 Ixelles
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/ebola">
            <h5 className={globalClasses.h5}>
              Place Quetelet 2, 1210 Saint-Josse-ten-Noode
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/gecamines">
            <h5 className={globalClasses.h5}>
              Boulevard du Souverain 30, 1170 Watermael-Boitsfort
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/lhosp">
            <h5 className={globalClasses.h5}>
              Avenue Henri Jaspar 101, 1060 Saint-Gilles
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/mdmBailli">
            <h5 className={globalClasses.h5}>
              Avenue Louise 194, 1000 Bruxelles
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/mdmPrinceRoyale">
            <h5 className={globalClasses.h5}>
              Rue Prince Royal 102, 1050 Ixelles
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/mdmSaintMarie">
            <h5 className={globalClasses.h5}>
              Place du Nouveau Marché Aux Grains 22, 1000 Bruxelles
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/philomene">
            <h5 className={globalClasses.h5}>
              Rue Philomène 110, 1030 Schaerbeek
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/vspAma">
            <h5 className={globalClasses.h5}>Avenue Louise 143</h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/vspDim">
            <h5 className={globalClasses.h5}>
              Boulervard Auguste Reyers 137, 1030 Schaerbeek
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/vspHotel">
            <h5 className={globalClasses.h5}>
              Place du Samedi 11, 1000 Bruxelles
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/vspLeo">
            <h5 className={globalClasses.h5}>
              Boulevard Leopold II 184C, 1080 Molenbeek
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/vspMart">
            <h5 className={globalClasses.h5}>
              Rue VanderBooGaerden 108, 1080 Molenbeek
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/vspOlivier">
            <h5 className={globalClasses.h5}>Rue L'Olivier 40</h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/vspRous">
            <h5 className={globalClasses.h5}>
              Rue Victor Rousseau 108, 1190 Forest
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/vspTous">
            <h5 className={globalClasses.h5}>
              Rue Fritz Toussaint 47, 1050 Ixelles
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/zoneNeutre">
            <h5 className={globalClasses.h5}>
              Avenue du Port 14, Molenbeek-Saint-Jean 1080
            </h5>
          </Link>
        </div>
        <div className={classes.blogPostContainer}>
          <Link to="/posts/pmJanBloc">
            <h5 className={globalClasses.h5}>
              Rue Jan Blockx 22-24, 1030 Schaerbeek
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostsSection;
