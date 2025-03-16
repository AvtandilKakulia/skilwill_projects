import { BrowserRouter, Routes, Route } from "react-router";
import TodoList from "../components/TodoList";
import AddTodo from "../pages/AddTodo";
import UpdateTodo from "../pages/UpdateTodo";
import Header from "../pages/Header";
import LanguageContextProvider from "../contexts/LanguageContex";


const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <LanguageContextProvider>
                        <Header />
                    </LanguageContextProvider>}>
                    <Route index element={<TodoList />} />
                    <Route path="/add" element={<AddTodo />} />
                    <Route path="/update/:todoId" element={<UpdateTodo />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Router