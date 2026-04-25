import React, { createContext, useContext } from "react";


const UserContext = createContext();

export default function App() {
  const user = { username: "Arjun", isLoggedIn: true };

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}


const Parent = () => <Child />;
const Child = () => <Profile />;

  const Profile = () => {
  const { username, isLoggedIn } = useContext(UserContext);

  return (
    <div>
      {isLoggedIn ? <h2>Welcome, {username} </h2> : <h2>Please Login</h2>}
    </div>
  );
};
