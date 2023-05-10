import { useGlobalStyles } from "../../../../constants";
import { useStyles } from "./AfghanPost.styles";
import clsx from "clsx";

const AfghanPost = ({ afghansPost: { images } }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <div
      className={clsx(
        globalClasses.container,
        classes.AfghansBeguinageContainer
      )}
    >
      {images.map((image, id) => (
        <div key={id}>
          <img
            src={image.img}
            alt="AfghanBeguinage"
            className={classes.AfghanBeguinageImage}
          />
        </div>
      ))}
    </div>
  );
};

export default AfghanPost;
