import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = (props) => {
  // localohsot:300/user/:1---
  //This userParams will get the us the params {userID:3}
  const params = useParams();

  const [userDetails, setMatchingUserDetails] = useState(null);

  useEffect(() => {
    const selectedUser = props.user.find((user) => user.id == params.userId);
    setMatchingUserDetails(selectedUser);
  }, []);

  if (!userDetails) {
    return <></>;
  }

  return (
    <div>
      <h1>User details</h1>
      <div>Id is :{userDetails.id}</div>
      <div>Name is :{userDetails.name}</div>
    </div>
  );
};

export default UserDetails;
