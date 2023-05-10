import { useStyles } from "./BlogPost.styles";
import { useGlobalStyles } from "../../constants";
import { Link } from "react-router-dom";

const BlogPost = ({ post }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <div className={classes.blogPostContainer}>
      <Link to="/urlPost">
        <h5 className={globalClasses.h5}>{post.title}</h5>
      </Link>
    </div>
  );
};

export default BlogPost;
