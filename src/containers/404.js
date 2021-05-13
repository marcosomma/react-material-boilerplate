import React from 'react'
import { Typography, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Container>
      <Typography variant={'h1'}>Ops! 404</Typography>
      <Link to="/">
        <Typography variant={'body1'}>go to landing</Typography>
      </Link>
    </Container>
  )
}

export default NotFound
