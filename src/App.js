import React from 'react'

// mui material ui
import { Container, Box } from '@mui/material'

// components
import AlertForm from "./components/AlertForm";
import AlertManager from "./components/AlertManager";

const App = () => {
  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AlertForm />
      <Box sx={{ my: 2, position: "absolute", top: 2, right: 16 }}>
        <AlertManager />
      </Box>
    </Container>
  )
}

export default App