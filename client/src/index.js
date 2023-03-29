import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Switch } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Switch,
  },
})

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>);