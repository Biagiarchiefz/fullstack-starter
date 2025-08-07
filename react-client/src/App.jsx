import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);


const fetchDataUsers = async () => {
    const response = await fetch("http://localhost:3001/api/v1/users");
    const data = await response.json();
    setUsers(data.data);
    // console.log(data);
  };

  useEffect(() => {
    fetchDataUsers();
  }, []);

  return (
    <div>
      {/* tanda tanya digunakan untuk maksure kalau belom ada datanya jangan error */}
      {users?.map((user) => ( 
        <div className="" key={user.id}>
            <h1>{user.username}</h1>
          </div>)
      )}
    </div>
  );
}

export default App;
