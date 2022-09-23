import React from 'react'
import './routes/Login.css'

const Input = (props)=>{
    return <div className='userData'>
       <input name={props.name} type={props.type} placeholder={props.placeholder} onChange = {props.onChange}/>
    </div>

}
export default Input