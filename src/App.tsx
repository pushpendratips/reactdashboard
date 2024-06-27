import React, { useState, createContext, useContext } from "react";

// Define types for UserContext
type User = {
  name: string;
};

// Create a context with default value
const defaultUser: User = { name: "Guest" };
const UserContext = createContext<User>(defaultUser);

// Define Component2
function Component2() {
  // Access user from context using useContext hook
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 2</h1>
      <h2>{`Hello ${user.name}!`}</h2>
    </>
  );
}

// Define App component
const App: React.FC = () => {
  // Define user state
  const [user, setUser] = useState<User>({ name: "John" });

  return (
    <div>
      {/* Provide UserContext with user state */}
      <UserContext.Provider value={user}>
        {/* Access user name */}
        <h1>{`Hello ${user.name}!`}</h1>
        {/* Render Component2 */}
        <Component2 />
      </UserContext.Provider>
    </div>
  );
};

export default App;
