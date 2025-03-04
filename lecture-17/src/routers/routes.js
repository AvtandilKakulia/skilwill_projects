import { BrowserRouter, Routes, Route } from 'react-router'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import FactsPage from '../pages/FactsPage'
import ErrorPage from '../pages/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainPage />} path="/" />
                <Route element={<AboutPage />} path="/about" />
                <Route element={<FactsPage />} path="/facts/:factID" />
                <Route element={<ErrorPage />} path='*' />
            </Routes>
        </BrowserRouter>
    )
}

export default Router