import { useEffect } from 'react';
import Todo from './Todo';
import {GetTodo} from '../service/ApiService'
import { useDispatch, useSelector } from 'react-redux';

const Todos = () =>{
    const todos = useSelector((store) => store.todosReducers.todos);
    const dispatch = useDispatch()
    useEffect(() =>{
      GetTodo.handleTodo(dispatch);
      },[])

    return(
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {todos?.map((todo) => <Todo key={todo.id} todo={todo}/>)}
        </div>
        
    );
}

export default Todos;