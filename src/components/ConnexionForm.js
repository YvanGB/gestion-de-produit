import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ConnexionForm = (props)=> {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const validateForm = (e) =>{
    e.preventDefault()
    if(username == "Yvan" && password == 1234){
      navigate('/dashboard')
      console.log("ok")
    }
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <form onSubmit={validateForm}>
              <div className="form-group">
                <label htmlFor="username">Nom d'utilisateur</label>
                <input type='text' className="form-control" id="username" placeholder="Entrez votre nom d'utilisateur" onChange={(e)=>setUsername(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Mot de passe</label>
                <input type="password" className="form-control" id="loginPassword" placeholder="Entrer votre mot de passe" onChange={(e)=>setPassword(e.target.value)} required />
              </div>
              {/* <button type="submit" className="btn btn-primary">Se connecter</button> */}
              <input type='submit' className='btn btn-primary' value="Se connecter" />
          </form>
          {/* <p>Vous n'avez pas de compte ? <a href='/inscription'>S'inscrire</a></p> */}
        </div>
      </div>
      
    </div>
  );
}

export default ConnexionForm;