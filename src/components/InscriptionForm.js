import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const InscriptionForm = ()=> {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPass, setConfirmPass] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password == confirmPass){
          console.log("ok")
        }
    }
  return (
    <form>
      <div className="form-group">
        <label htmlFor="registerName">Nom</label>
        <input type="text" className="form-control" id="registerName" onChange={(e)=>setName(e.target.value)} placeholder="Entrer votre nom" required />
      </div>
      <div className="form-group">
        <label htmlFor="registerPassword1">Mot de passe</label>
        <input type="password" className="form-control" id="registerPassword" onChange={(e)=>setPassword(e.target.value)} placeholder="Mot de passe" required />
      </div>
      <div className="form-group">
        <label htmlFor="registerPassword2">Confirmer mot de passe</label>
        <input type="password" className="form-control" id="registerPassword" onChange={(e)=>setConfirmPass(e.target.value)} placeholder="Mot de passe" required />
      </div>
      <input type='submit' className='btn btn-primary' value="S'inscrire" />
    </form>
  );
}

export default InscriptionForm;