import React from 'react';
import Navbar from './components/general/Navbar';
import Title from './components/general/Title';
import { AuthProvider } from './contexts/AuthContext';

function App() {

    return (
        <div className="App">
            <Title/>
            <AuthProvider>
                <Navbar/>
            </AuthProvider>
        </div>
  );
}

export default App;
