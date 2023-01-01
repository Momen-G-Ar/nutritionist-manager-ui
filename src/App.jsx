import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/home.page';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<HomePage />} />
                    <Route path='/home-page' element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
