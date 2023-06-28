import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';

function Produits() {
    const navigate = useNavigate();

    const [state, setState] = useState({
        isLoading: true,
        produits:[],
        selectedProduct:null,
        showModal: false,
        showDetailModal:false,
        error:''
    })

    const handleClose = () => {
        setState({
          ...state,
          showModal: false,
        });
      };

      const handleShow = (produit) => {
        setState({
          ...state,
          selectedProduct: { ...produit }, // Copie profonde de l'objet produit
          showModal: true,
        });
      };

      const handleShowDetail = (produit) => {
        setState({
          ...state,
          selectedProduct: { ...produit },
          showDetailModal: true,
        });
      };

      const handleCloseDetail = () => {
        setState({
          ...state,
          showDetailModal: false,
        });
      };
      
    const handleAddProduct = (e) =>{
        e.preventDefault();
        navigate('/ajouterproduit');
    }   

    const updateProduct = (updatedProduct) => {
        setState(prevState => {
          const updatedProduits = prevState.produits.map((produit) => {
            if (produit.id === updatedProduct.id) {
              return updatedProduct;
            }
            return produit;
          });
      
          return {
            ...prevState,
            produits: updatedProduits,
          };
        });
      };
      
      const handleDelete = (productId) => {
        axios.delete(`http://localhost:5000/products/${productId}`)
          .then(response => {
            const updatedProduits = state.produits.filter(produit => produit.id !== productId);
            setState(prevState => ({
              ...prevState,
              produits: updatedProduits,
            }));
          })
          .catch(error => {
            console.error(error);
          });
      };

    const handleSubmit = () => {
        const updatedProduits = state.produits.map((produit) => {
            if (produit.id === state.selectedProduct.id) {
                return {
                    ...produit,
                    title: state.selectedProduct.title,
                    description: state.selectedProduct.description,
                    price: state.selectedProduct.price
                };
            }
            return produit;
        });
        setState({
            ...state,
            produits: updatedProduits,
            showModal: false,
            });

        const modifiedData = {
            title: state.selectedProduct.title,
            price: state.selectedProduct.price,
            description: state.selectedProduct.description
          };

          axios.put(`http://localhost:5000/products/${state.selectedProduct.id}`, modifiedData)
            .then(response => {
                updateProduct(response.data);
                handleClose();
            })
            .catch(error => {
            // Gérer les erreurs de la requête
            console.error(error);
            });
    };

    useEffect(() =>{
        axios.get("http://localhost:5000/products")
        .then(res =>{
            const resultats = res.data;
            setState({
                ...state,
                isLoading:false,
                produits:resultats,
            })
            localStorage.setItem('produits', JSON.stringify(state.produits))
        }).catch(err => setState({...state ,error:err}))
    },[])
    
  return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <span className="navbar-brand">Liste des produits</span>
                    <button type="button" onClick={handleAddProduct} className="btn btn-primary">Ajouter un produit</button>
                </div>
            </nav>

            {state.selectedProduct && (
            <Modal show={state.showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier le produit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" value={state.selectedProduct.title} onChange={(e)=>setState({...state, selectedProduct:{...state.selectedProduct, title:e.target.value}})} className="form-control" id="nom" placeholder="Nom du produit" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prix">Prix</label>
                            <input type="text" value={state.selectedProduct.price} onChange={(e)=>setState({...state, selectedProduct:{...state.selectedProduct, price:e.target.value}})} className="form-control" id="prix" placeholder="Prix du produit" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" value={state.selectedProduct.description} onChange={(e)=>setState({...state, selectedProduct:{...state.selectedProduct, description:e.target.value}})} id="description" rows="3" placeholder="Description du produit"></textarea>
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

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Fermer</Button>
                    <Button variant="primary" onClick={handleSubmit}>Enregistrer les modifications</Button>
                </Modal.Footer>
            </Modal>
            )}       

            {state.selectedProduct &&
                <Modal show={state.showDetailModal} onHide={handleCloseDetail}>
                <Modal.Header closeButton>
                <Modal.Title>Informations du produit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h3>{state.selectedProduct.title}</h3>
                <p>Prix: {state.selectedProduct.price}$</p>
                <p>Description: {state.selectedProduct.description}</p>
                <p>Catégorie: {state.selectedProduct.category}</p>
                {/* <div>
                    <h5>Images:</h5>
                    {state.selectedProduct.images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`} />
                    ))}
                </div> */}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Fermer</Button>
                </Modal.Footer>
            </Modal>}

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {state.produits.map((produit) => (
                    <tr key={produit.id}>
                        <td>{produit.id}</td>
                        <td>{produit.title}</td>
                        <td>{produit.price}$</td>
                        <td className='d-flex justify-content-evenly'>
                            <button className="btn btn-primary" onClick={() => handleShowDetail(produit)}>Détails</button>
                            <button className="btn btn-secondary" onClick={()=>handleShow(produit)}>Modifier</button>
                            <button className="btn btn-danger" onClick={() => handleDelete(produit.id)}>Supprimer</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

  )
}

export default Produits