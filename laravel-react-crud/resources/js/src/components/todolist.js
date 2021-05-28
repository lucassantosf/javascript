import React from 'react' 
import { connect } from 'react-redux'
import {  removeItem } from '../actions' 

const renderPosts = (todos,removeItem) => { 

    const handleRemove = (todo)=>{ 
        const minhaCopia = todos.filter(item=>item!==todo) 
        removeItem(minhaCopia)
    } 

    if(!todos){
        return (
            <tr>
                <td colSpan="2">Loading todos...</td> 
            </tr>
        )
    }
    if(todos.length===0){
        return (
            <tr>
                <td colSpan="2">There is no todos...</td> 
            </tr>
        )
    }
    return todos.map((todo)=>( 
        <tr key={todo}> 
            <td>{todo}</td>
            <td>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={()=>handleRemove(todo)}>
                    Delete
                </button> 
            </td>
        </tr>  
    ))
}

const TodoList = (props) => { 
    return (
        <table className="table table-striped mt-1">
            <thead>
                <tr>
                    <th>Description</th> 
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderPosts(props.todos, props.removeItem)}
            </tbody>
        </table>
    ) 
} 
 
const mapStateToProps = (state)=>{
    return {
        todos : state.todos 
    }
}

const mapActionToProps = {
    removeItem
}

export default connect(mapStateToProps,mapActionToProps)(TodoList)