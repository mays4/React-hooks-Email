import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import ErrorModal from "./ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
   const nameInputRef = useRef();
   const ageInputRef= useRef();
  // const [enteredUsername, setEnterUsername] = useState("");
  // const [enteredUserage, setEnterUserage] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
   const enteredName= nameInputRef.current.value; 
   const enteredAge = ageInputRef.current.value;
    event.preventDefault();
     if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title:'Invalid input',
        message:'Please enter a valid name and age(non-empty value)'
      })
      return;
     }
     if(+enteredAge < 1){
      setError({
        title:'Invalid age',
        message:'Please enter a valid age(> 0)'
      })
      return;
     }
    //  props.onAddUser(enteredUsername,enteredUserage);
     props.onAddUser(enteredName,enteredAge);
    // console.log(enteredUsername, enteredUserage);
    nameInputRef.current.value=''; 
    ageInputRef.current.value='';
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
        <input type="text" id="username" ref={nameInputRef} />
        <label htmlFor="age">Age(Years)</label>
        <input type="number" id="age" ref={ageInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
};
export default AddUser;
