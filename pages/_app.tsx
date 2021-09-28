import React from 'react';
import '../styles/globals.css';
import "../styles/modal.scss"
import { AppProps } from "next/app";


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="root_app">

      
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
