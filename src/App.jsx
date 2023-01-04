import './App.css';

import HomePage from './pages/home/home.page';
import NewProgram from './pages/new-program/new-program.page';
import Login from './pages/login/login.page';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/core/header/header';
import UserProvider from './components/providers/user-provider.component';


const App = () => {
    return (
        <div className="App">
            <UserProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/*' element={<Login />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/home-page' element={<HomePage />} />
                        <Route path='/new-program' element={<NewProgram />} />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </div>
    );
};

export default App;
