import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";

function Users() {
  const usersUsernames = useSelector((state) =>
    state.users.map((user) => user.username)
  );
  const usersCount = useSelector((state) => state.users.length);

  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {usersUsernames.map((username) => {
          return <li>{username}</li>
        })}
        {/* In addition, display the total number of users curently in the store */}
        <p>Total Users: {usersCount}</p>
      </ul>
    </div>
  );
}

export default Users;
