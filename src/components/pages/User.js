import { useEffect, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

function User({ match }) {
  const { getUser, user } = useContext(GithubContext);

  useEffect(() => {
    getUser(match.params.login);
  }, []);
  return <div>User</div>;
}

export default User;
