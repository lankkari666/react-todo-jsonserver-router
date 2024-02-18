import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/mainPage/mainPage";
import { TodoPage } from "./pages/todoPage/todoPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/task/:id" element={<TodoPage />}></Route>
    </Routes>
  );
}
