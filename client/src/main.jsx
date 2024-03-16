import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store, persistor} from './redux/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';

import CssBaseline from '@mui/material/CssBaseline';

import { Provider } from 'react-redux'

import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DarkModeContextProvider } from './context/darkModeContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  
  <React.StrictMode>

    <GoogleOAuthProvider clientId='252241189175-9b130cibn2402l1n8b0e1v03d9jov3m1.apps.googleusercontent.com'>
    
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <CssBaseline />
      <DarkModeContextProvider>

        <App />
      </DarkModeContextProvider>
    
    <ToastContainer />

        {/* </StateProvider> */}
        
      </PersistGate>
     </Provider>
    
  </GoogleOAuthProvider>
  </React.StrictMode>
        
   
)
