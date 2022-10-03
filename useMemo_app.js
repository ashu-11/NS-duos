import { useState } from "react";
import List from "./components/List";
import "./styles.css";
import { v4 as uuid } from "uuid";
export default function App() {
  console.log("Rendered:App");
  const initialUsers = [
    {
      id: 1,
      name: "John"
    },
    {
      id: 2,
      name: "Doe"
    }
  ];
  const [users, setUsers] = useState(initialUsers);
  const [user, setUser] = useState("");
  function addUser(e) {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name: user
    };
    setUsers([...users, newUser]);
  }
  return (
    <div className="App">
      <form onSubmit={addUser}>
        <input
          placeholder="Enter Name"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button type="submit">Add User</button>
      </form>
      <List list={users} />
    </div>
  );
}
