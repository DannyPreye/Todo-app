import React from "react";
import { ITodoState } from "../../types/IpageProps";
import Button from "./Button";

interface Props {
    currentTodo: ITodoState | null;
    setCurrentTodo: React.Dispatch<React.SetStateAction<ITodoState | null>>;
    setTodos: React.Dispatch<React.SetStateAction<ITodoState[]>>;
}

const MainPage: React.FC<Props> = ({
    currentTodo,
    setCurrentTodo,
    setTodos,
}) => {
    const [todoText, setTodoText] = React.useState<string>(
        currentTodo?.title || ""
    );

    React.useEffect(() => {
        if (currentTodo) {
            setTodoText(currentTodo.title);
        }
    }, [currentTodo]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (currentTodo) {
            setTodos((prev) =>
                prev.map((todo) =>
                    todo.id === currentTodo.id
                        ? { ...todo, title: todoText }
                        : todo
                )
            );
            setCurrentTodo({ ...currentTodo, title: todoText });
        }
    };

    const handleDelete = () => {
        if (currentTodo) {
            setTodos((prev) =>
                prev.filter((todo) => todo.id !== currentTodo.id)
            );
            setCurrentTodo(null);
        }
    };

    return (
        <div className='w-full  h-screen flex flex-col'>
            <div className='py-[41px] grid  h-[123px] place-items-center bg-primary-blue text-white text-[24px] leading-[28.13px]  font-[500] shadow-lg '>
                Edit
            </div>
            <form className='flex-1' onSubmit={handleSubmit}>
                {currentTodo ? (
                    <div className='bg-white py-[28px]  px-[17px] flex flex-col h-full justify-between '>
                        <div className='flex flex-col gap-[15px]'>
                            <p className='font-[500] text-[16px] leading-[19.44px] '>
                                Task Name
                            </p>
                            <input
                                value={todoText}
                                onChange={(e) => setTodoText(e.target.value)}
                                className='w-full border-2 text-[20px] leading-[24.3px] border-[#CBCBCB] focus:outline-none px-[26px] py-[20px] h-[69px] rounded-[9px]'
                            />
                        </div>
                        <div className='flex gap-[20px] h-[61px]'>
                            <Button
                                onClick={handleDelete}
                                className=' w-1/4 text-white bg-secondary-red border-2 border-primary-red '
                            >
                                Delete
                            </Button>
                            <Button
                                type='submit'
                                className=' flex-1  text-white bg-primary-blue border-2 border-[#0D2972]'
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </form>
        </div>
    );
};

export default MainPage;
