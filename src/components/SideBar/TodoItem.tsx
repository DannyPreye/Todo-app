import React from "react";
import { ITodoState } from "../../types/IpageProps";
import { IoMdCheckmark } from "react-icons/io";
interface TodoItemProps {
    todo: ITodoState;
    toggleTodo: (id: string) => void;
    setCurrenTodo: React.Dispatch<React.SetStateAction<ITodoState | null>>;
}

const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    toggleTodo,
    setCurrenTodo,
}) => {
    return (
        <div
            className='w-full h-[91px] border-[1px] flex-shrink-0 rounded-[6px] border-[#E7E7E7] todo-shadow flex justify-between items-center px-[23px]'
            key={todo.id}
        >
            <div className='flex items-center gap-[17px]'>
                <div
                    onClick={() => {
                        toggleTodo(todo.id);
                    }}
                    className={`${
                        todo.completed
                            ? "bg-[#399649]"
                            : "bg-white border-primary-blue"
                    } w-[32px]  h-[32px] rounded-full text-gray-400 border-[1.5px] grid place-items-center cursor-pointer`}
                >
                    {todo.completed && <IoMdCheckmark size={20} />}
                </div>

                <p
                    className={`text-[16px] leading-[16.08px]  ${
                        todo.completed
                            ? "line-through text-[#8D8D8D]"
                            : " text-primary-blue"
                    }`}
                >
                    {todo.title}
                </p>
            </div>
            <button
                onClick={() => setCurrenTodo(todo)}
                className='border-2 border-primary-blue rounded-[4px] w-[51px] h-[45px] text-primary-blue text-[16px] leading-[18.75px] font-[500]'
            >
                Edit
            </button>
        </div>
    );
};

export default TodoItem;
