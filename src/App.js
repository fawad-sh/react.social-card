import {useState, useEffect} from 'react';
import SocailCard from './SocialCard';

import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  
  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch('https://randomuser.me/api/?results=12');
         userData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setAllUsers(userData);
      setUsers(userData);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(
    user => (`${user.name.first} ${user.name.last}`
    .toLocaleLowerCase()
    .includes(value)
    ));

    setUsers(filteredUsers);
  }

  return (
    <div className="App">
      <h1>Social Card</h1>
      <input className="search-box" placeholder="Search..." onInput={filterCards} />
      <div className="cards-container">
      {users.map((user,index) => (
        <SocailCard userData={user} key={index}/>
      ))}
      </div>
    </div>
  );
}

export default App;
