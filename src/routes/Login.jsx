import React,{useState} from 'react'
import Input from '../Input'
import {Link, useNavigate} from 'react-router-dom'
import '../App.css'
import './Login.css'
import { signInWithGooglePopup, createUserDocFromAuth, signinAuthUserWithEmailAndPassword} from '../utils/firebase'
const Login = (props)=>{
       const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user)
       }
        

        const [contact, setContact] = useState({
            email: '',
            password: ''
        })
       
        const {email, password} = contact
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

        try{
            const response = await signinAuthUserWithEmailAndPassword(email,password);
            alert('login-successfull')
            navigate('/HomePage')
        }
        catch(error){
            console.log('error in login', error.message)

        }
    }


 
    return <div className= 'header-div'>

        <div className='header-sub-div'>

        <div className='userInput'>
            <p>Your Email</p>
            <Input
            className= 'userData'
            name= 'email'
            type= 'text'
            placeholder ='email'
            onChange = {handleChange}
            value = {contact.email}
            />
        </div>

        <div className='userInput'>
            <p>Your Password</p>
            <Input
            className= 'userData'
            name='password'
            type= 'password'
            placeholder ='password'
            onChange = {handleChange}
            value = {contact.password}
            />
        </div>

       <button onClick={handleSubmit}>
        Log in
       </button>
        <button onClick={logGoogleUser}>
            Log in with Google
        </button>
        <br></br>

       <Link to='/signup' className='sign-up-link'>
        Sign up instead
       </Link>  
        </div>


    </div>

}
export default Login