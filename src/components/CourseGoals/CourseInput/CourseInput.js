import React,{useState} from 'react';
import Button from '../../UI/Button/Button';
// import classes from './CourseInput.module.css';
import styled from 'styled-components';

const FormControl = styled.div `
    margin: 0.5rem 0;
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  
& input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  
`

const CourseInput = (props) => {

    const [enteredValue,setEnteredValue] = useState('');

    const goalInputChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        props.onAddGoal(enteredValue)

        setEnteredValue('');
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl >
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </FormControl>
            <Button type='submit'>Add Goal</Button>
        </form>
    )
}
export default CourseInput;