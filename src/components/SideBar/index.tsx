import React from "react";
import { ITodoState } from "../../types/IpageProps";
import UserProfile from "./UserProfile";
import Pro from "./Pro";
import TodoItem from "./TodoItem";
import { v4 as uuid } from "uuid";

interface SideBarProps {
    todos: ITodoState[];
    setTodos: React.Dispatch<React.SetStateAction<ITodoState[]>>;
    setCurrenTodo: React.Dispatch<React.SetStateAction<ITodoState | null>>;
}

const SideBar: React.FC<SideBarProps> = ({
    todos,
    setTodos,
    setCurrenTodo,
}) => {
    const toggleTodo = (id: string) => {
        console.log(id);
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleNewTodo = () => {
        setTodos([
            ...todos,
            {
                id: String(uuid()),
                title: "New Todo",
                completed: false,
            },
        ]);
    };

    return (
        <div className='w-1/4  sticky left-0 top-0 bg-white custom-shadow flex flex-col justify-between pb-[25px]'>
            <div>
                <UserProfile />
                <Pro />
                <div className='py-[20px] px-[16px] h-[60vh] overflow-y-auto  flex flex-col gap-[24px]'>
                    {todos.map((todo) => (
                        <TodoItem
                            todo={todo}
                            toggleTodo={() => toggleTodo(todo.id)}
                            setCurrenTodo={setCurrenTodo}
                        />
                    ))}
                </div>
            </div>

            <div className='flex justify-end px-[16px]'>
                <button
                    onClick={handleNewTodo}
                    className='w-[60px] h-[60px] border-2 border-[#123EB1] rounded-full bg-primary-blue text-white flex justify-center items-center'
                >
                    <img src='/plus.png' alt='' />
                </button>
            </div>
        </div>
    );
};

export default SideBar;
