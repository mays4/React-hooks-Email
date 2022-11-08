import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';
import { useState } from 'react';

function App() {
 
  const [usersList, setUsersList] = useState([]);
  const AddUserHandler=(uName,uAge)=>{
    setUsersList((prevUserList)=>{
       return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser={AddUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
