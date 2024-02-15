import React, { useState } from "react";
import { ITodoState } from "../../types/IpageProps";
import SideBar from "../../components/SideBar";
import MainPage from "../../components/MainPage";

const Home: React.FC = () => {
    const [todos, setTodos] = useState<ITodoState[]>([]);
    const [currentTodo, setCurrenTodo] = useState<ITodoState | null>(null);

    return (
        <div className='flex font-roboto'>
            <SideBar
                todos={todos}
                setTodos={setTodos}
                setCurrenTodo={setCurrenTodo}
            />
            <MainPage
                currentTodo={currentTodo}
                setTodos={setTodos}
                setCurrentTodo={setCurrenTodo}
            />
        </div>
    );
};

export default Home;
