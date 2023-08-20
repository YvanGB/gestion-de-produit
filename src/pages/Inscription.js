import React from 'react'
import { Container } from 'react-bootstrap'
import InscriptionForm from '../components/InscriptionForm'

function Inscription({auth}) {
  return (
    <Container>
      <h1 style={{textAlign:'center'}}>Inscription</h1>
      <InscriptionForm auth={auth} />
    </Container>
  )
}

export default Inscription