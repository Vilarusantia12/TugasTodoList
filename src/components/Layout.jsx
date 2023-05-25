import { Link, Outlet } from "react-router-dom"
import { actions } from '../features/todos/todosSlice';
import { useDispatch, useSelector } from "react-redux";
import "./Layout.css"


const Layout = () => {
    const userInput = useSelector(state => state.todos.userInput);
    const dispatch = useDispatch();

    const handleCreateTodo = (e) => {
        e.preventDefault();
        dispatch(actions.createTodo())
    }

    const handleSetUserInput = (userInput) => {
        dispatch(actions.setUserInput({ userInput }))
    }

    return (

        <div>
                <div id="todolist" className="row text-center p-10 bg-pink-500 hover:bg-pink-700 text-white ">
                    <div className="col">
                        <h1 className="text-4xl">TodoList</h1>
                        <h1 className="text-4xl">Apa Cara Yang Benar Untuk Menjaga Lingkungan?</h1>
                    </div>
                </div>
            
            <form className="flex gap-2 p-2" onSubmit={handleCreateTodo}>
                <input 
                    id="input"
                    type="text"
                    value={userInput}
                    onChange={(e) => handleSetUserInput(e.target.value)}
                    placeholder="Enter your todo message"
                    className="p-2 w-full border-cyan-400 border-solid border-2 rounded"
                />
                <input id="add" type="submit" className="btn" value="Add" />
            </form>
            <nav >
                <ul className="flex gap-2 p-2">
                    <li id="menu1" className="bg-green-500 hover:bg-green-1000 text-white">
                        <Link to={"/"}>All</Link>
                    </li>
                    <li id="menu2" className="bg-green-500 hover:bg-green-1000 text-white">
                        <Link to={"/active"}>Active</Link>
                    </li>
                    <li id="menu3" className="bg-green-500 hover:bg-green-1000 text-white">
                        <Link to={"/completed"}>Completed</Link>
                    </li>
                </ul>
            </nav>
            <section className="p-2">
                <Outlet />
            </section>
        </div>
    )
}

export default Layout