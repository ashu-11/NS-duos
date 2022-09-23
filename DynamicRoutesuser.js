import { Link } from "react-router-dom";

const Users = (props) => {
  return (
    <div>
      {props.user.map((user) => {
        return (
          <div key={user.id}>
            <span>{user.name}</span>
            <Link to={`/users/${user.id}`}>
              <button>Show details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
