import React from 'react'
import ConnexionForm from '../components/ConnexionForm'
import { Container } from 'react-bootstrap'

function Connexion({auth}) {
  return (
    <Container>
      <h1 style={{textAlign:'center'}}>Connexion</h1>
      <ConnexionForm />
    </Container>
  )
}

export default Connexion