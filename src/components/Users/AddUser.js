import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "./ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const [enteredUsername, setEnterUsername] = useState("");
  const [enteredUserage, setEnterUserage] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
   
    event.preventDefault();
     if(enteredUsername.trim().length === 0 || enteredUserage.trim().length === 0){
      setError({
        title:'Invalid input',
        message:'Please enter a valid name and age(non-empty value)'
      })
      return;
     }
     if(+enteredUserage < 1){
      setError({
        title:'Invalid age',
        message:'Please enter a valid age(> 0)'
      })
      return;
     }
     props.onAddUser(enteredUsername,enteredUserage);
    // console.log(enteredUsername, enteredUserage);
    setEnterUsername('');
    setEnterUserage('');
  };
  const addUsernameHandler = (event) => {
    setEnterUsername(event.target.value);
  };
  const addUserageHandler = (event) => {
    setEnterUserage(event.target.value);
  };
  const errorHAndler=()=>{
    setError(null);
  }
  return (
    <Wrapper>
   {error &&<ErrorModal title={error.title}message={error.message} onConfirm={errorHAndler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={enteredUsername} onChange={addUsernameHandler} />
        <label htmlFor="age">Age(Years)</label>
        <input type="number" id="age"  value={enteredUserage} onChange={addUserageHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
};
export default AddUser;
