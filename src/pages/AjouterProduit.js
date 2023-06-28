import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function AjouterProduit() {

    const navigate = useNavigate();

    const [state, setState] = useState({
        title:'',
        prix:0,
        description:'',
        categorie:''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const nouveauProduit = {
          title: state.title,
          price: state.prix,
          description: state.description,
          category: state.categorie
        };
    
        axios.post('http://localhost:5000/products', nouveauProduit)
          .then(response => {
            console.log(response.data);
            setState({
              nom: '',
              prix: '',
              description: '',
              categorie:''
            });

            navigate('/home');
          })
          .catch(error => {
            // Gérer les erreurs de la requête
            console.error(error);
          });
      };
    

    useEffect(()=>{
        console.log(state)
    },[state])


  return (
    <div className="container">
    <h1>Ajout de produit</h1>
    <form>
        <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input type="text" value={state.title} onChange={(e)=>setState({...state, title:e.target.value})} className="form-control" id="nom" placeholder="Nom du produit" />
        </div>
        <div className="form-group">
            <label htmlFor="prix">Prix</label>
            <input type="text" value={state.prix} onChange={(e)=>setState({...state, prix:e.target.value})} className="form-control" id="prix" placeholder="Prix du produit" />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" value={state.description} onChange={(e)=>setState({...state, description:e.target.value})} id="description" rows="3" placeholder="Description du produit"></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="categorie">Catégorie</label>
            <select onChange={(e)=>setState({...state, categorie:e.target.value})} className="form-control" id="categorie">
                <option value="">Sélectionnez une catégorie</option>
                <option value="Laptops">Laptops</option>
                <option value="Smartphones">Smartphones</option>
                <option value="Skincare">Skincare</option>
            </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Ajouter</button>
    </form>
</div>
  )
}

export default AjouterProduit