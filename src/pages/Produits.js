import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

function Produits() {
    const [state, setState] = useState({
        isLoading: true,
        produits:[],
        error:''
    })

    useEffect(() =>{
        axios.get("http://localhost:3333/products")
        .then(res =>{
            const resultats = res.data;
            setState({
                ...state,
                isLoading:false,
                produits:resultats,
            })
            localStorage.setItem('products', JSON.stringify(state.produits))
        }).catch(err => setState({...state ,error:err}))
    },[state])
  return (
    <Container>
        <h1 style={{textAlign:'center'}}>Liste des produits</h1>
        {
            state.isLoading ? <h4 style={{textAlign:'center'}}>Liste des produits en cours de chargement...</h4>:
            state.produits.map(produit =>(
                <div key={produit.id} style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',}}>
                    <p>{produit.title}</p>
                    <p style={{marginLeft:10}}>{produit.price} $</p>
                </div>
            ))
        }
    </Container>
  )
}

export default Produits