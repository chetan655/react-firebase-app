import React,{useState} from 'react'
import Input from '../Input'
import {Link,useNavigate} from 'react-router-dom'
import '../App.css'
import './Signup.css'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../utils/firebase'

const Signup = (props)=>{
        const [contact, setContact] = useState({
            displayName:'',
            email: '',
            password: '',
            confirmPassword:''
        })
       
    const {displayName, email, password, confirmPassword} = contact;

    console.log(contact);

    const navigate = useNavigate()
    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }
    const handleSubmit = async(event) =>
    {
        event.preventDefault();

        if (password !== confirmPassword){
            alert('Passwords do not match!')
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth (user, {displayName});
            alert('sign-up successfull')
            navigate('/HomePage')
        }
        catch(error){
            console.log('error in creating user', error.message)

        }
    }

    
 
    return <div className= 'header-div'>
        <div className='header-sub-div'>
            <div className='userInput'>
            <p>Your User Name</p>
            <Input 
                name= 'displayName'
                type= 'text'
                placeholder ='name'
                onChange = {handleChange}
                value = {contact.displayName}
            />
            </div>

            <div className='userInput'>
            <p>Your Email</p>
                <Input 
                    name= 'email'
                    type= 'email'
                    placeholder ='email address'
                    onChange = {handleChange}
                    value = {contact.email}
                />

            </div>

            <div className='userInput'>
            <p>Your Password</p>
                <Input 
                name='password'
                type= 'password'
                placeholder ='password'
                onChange = {handleChange}
                value = {contact.password}
                />
            </div>

            <div className='userInput'>
            <p>Confirm Password</p>
                <Input 
                name='confirmPassword'
                type= 'password'
                placeholder ='confirm password'
                onChange = {handleChange}
                value = {contact.confirmPassword}
                />
            </div>

            <button onClick={handleSubmit}>
                Sign up
            </button>

            <Link to='/login' className='log-in-link'>
                Login
            </Link>  
        </div>
    
    </div>

}
export default Signup