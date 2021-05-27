import { createStore, combineReducers} from 'redux'

const reducers = combineReducers({
    prop1: (state,action)=>{
        return {exemplo:'Deu certo 1'}
    },
    prop2: (state,action)=>{
        return {exemplo:'Deu certo 2'}
    }
})

function store(){
    return createStore(reducers)
}

export default store