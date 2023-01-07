import './App.css';

import HomePage from './pages/home/home.page';
import Login from './pages/login/login.page';
import NewProgram from './pages/new-program/new-program.page';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/core/header/header';
import UserProvider from './components/providers/user-provider.component';
import FoodTable from './pages/food-table/food-table.page';
import { ConfigProvider } from 'antd';

const App = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                },
            }}
        >
            <div className="App">
                <UserProvider>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path='/*' element={<HomePage />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/home-page' element={<HomePage />} />
                            <Route path='/manage-food-table' element={<FoodTable />} />
                            <Route path='/new-program' element={<NewProgram />} />
                        </Routes>
                    </BrowserRouter>
                </UserProvider>
            </div>
        </ConfigProvider>
    );
};

export default App;
