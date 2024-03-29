import React, { useState, useContext } from 'react'
import { Typography, Container, Button } from '@material-ui/core'
import { GlobalContext } from '../context/GlobalState'

function Landing() {
  const { state, actionsRooter } = useContext(GlobalContext)
  const [active01, setActive01] = useState(true)
  const [active02, setActive02] = useState(true)

  const handlerOnClickButton01 = () => {
    setActive01(false)
    setActive02(true)
    actionsRooter.actions01.exampleFunction01('01')
  }
  const handlerOnClickButton02 = () => {
    setActive02(false)
    setActive01(true)
    actionsRooter.actions02.exampleFunction02('02')
  }
  return (
    <Container>
      <Typography variant={'h1'}>{state.title}</Typography>
      <Typography variant={'subtitle1'}>{state.test}</Typography>
      <Button onClick={handlerOnClickButton01} disabled={!active01}>
        01
      </Button>
      <Button onClick={handlerOnClickButton02} disabled={!active02}>
        02
      </Button>
    </Container>
  )
}

export default Landing
