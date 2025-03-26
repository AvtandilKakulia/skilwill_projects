import {BrowserRouter, Route, Routes} from 'react-router'
import CreateTodo from '../pages/CreateTodo'
import ActiveTodos from '../pages/ActiveTodos'
import DoneTodos from '../pages/DoneTodos'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ActiveTodos />} />
                <Route path="/create" element={<CreateTodo />} />
                <Route path="/done" element={<DoneTodos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router