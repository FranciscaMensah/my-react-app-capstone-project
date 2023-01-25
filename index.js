import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './Components/LandingPage';
import Test from './Components/Test';
import Results from './Components/Results';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App (){
    return(
        <main>
            {/* <LandingPage/> */}
            <Test/>
            
        </main>
    )
}

root.render(<App/>)