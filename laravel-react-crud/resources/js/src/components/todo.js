import React, { useState } from 'react'
import AppContainer from './AppContainer' 
import { connect } from 'react-redux'
import { pushItem } from '../actions' 
import TodoList from './todolist'

const Todo = (props) => {
    const [description, setDescription] = useState('')

    const handleAdd = ()=>{
        const minhaCopia = [...props.todos] 
        minhaCopia.push(description) 
        props.pushItem(minhaCopia)
        setDescription('')
    }

    return (
        <AppContainer title="Todo List">
            Descreva o item 

            <input type="text" className="form-control" value={description} onChange={e=>setDescription(e.target.value)} />
            
            <button type="button" onClick={handleAdd} className="btn btn-success mt-2">
                Adicionar
            </button>

            <div className="table-responsive"> 
                <TodoList />
            </div>
        </AppContainer>
    )

} 
 
const mapStateToProps = (state)=>{
    return {
        todos : state.todos  
    }
}

const mapActionToProps = {
    pushItem
}

export default connect(mapStateToProps,mapActionToProps)(Todo)