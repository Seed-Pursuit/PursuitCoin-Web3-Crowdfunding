import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider, useContract } from '@thirdweb-dev/react';
import { StateContextProvider } from './context';
import App from './App';
import './index.css';
import { Sepolia } from "@thirdweb-dev/chains";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider
    activeChain={Sepolia}
    clientId="e554a1bae13469fa96e05edf43eff930"
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)