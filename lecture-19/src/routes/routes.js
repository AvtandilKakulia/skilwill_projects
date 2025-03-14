import { BrowserRouter, Routes, Route } from "react-router";
import TodoList from "../components/TodoList";
import AddTodo from "../pages/AddTodo";
import UpdateTodo from "../pages/UpdateTodo";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/add" element={<AddTodo />} />
                <Route path="/update/:todoId" element={<UpdateTodo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router