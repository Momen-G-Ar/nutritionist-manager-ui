import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home.page';
import NewProgram from './pages/new-program/new-program.page';


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<HomePage />} />
                    <Route path='/home-page' element={<HomePage />} />
                    <Route path='/new-program' element={<NewProgram />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
