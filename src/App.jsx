import {Route, Routes} from "react-router-dom";
import {MainPage, NotFoundPage, TodoPage} from "./pages";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/tasks/:id" element={<TodoPage/>}></Route>
            <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
    );
}
