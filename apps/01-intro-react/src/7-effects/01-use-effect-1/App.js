import React from 'react'
import {Container, InputArea} from "@react-hackcamp/components";

export const App  = () => {
  document.title = 'Change this'
  return (
    <Container>
      <h1>Check the title of the tab</h1>
      <InputArea
        value={''}
        onChange={({target: {value}}) => {}}
      />
    </Container>
  )
}


