import React from 'react';

import Title from './components/general/Title';

import AuthProvider from './contexts/AuthContext';

function App() {

    return (
        <div className="App">
            <AuthProvider>
                <Title/>
            </AuthProvider>
        </div>
  );
}

export default App;
