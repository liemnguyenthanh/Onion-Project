import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAccount } from './actions/account';
const PageLogin = () => {
    
    const [form, setForm] = useState({
        username : null,
        password : null
    })

    const dispatch = useDispatch()
    
    const handleSubmit = () => {
        dispatch(loginAccount(form))
    }
   
    return (
        <div>
            <div className="body_login"></div>
            <div className="grad"></div>
            <div className="header">
                <div>Hành<span>Tây</span></div>
            </div>
            <br />
            <div className="login">
                <input  type="text" 
                        placeholder="username"
                        value={form.username}
                        onChange={e => setForm({...form , username : e.target.value})}  /><br />
                <input  type="password" placeholder="password" 
                        value={form.password}
                        onChange={e => setForm({...form , password : e.target.value})} /><br />
                <input type="button" value="Login" 
                        onClick={()=>handleSubmit()}
                        />
            </div>
        </div>
    );
};

export default PageLogin;
