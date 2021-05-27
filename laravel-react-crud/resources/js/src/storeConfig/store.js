import { createStore, combineReducers} from 'redux'
import api from '../api' 

let posts = []

function fetchPosts(){
    api.getAllPosts().then(res=>{ 
        const result = res.data;
        console.log('fetch',result.data)

        posts = result.data
    }) 
}

fetchPosts()

console.log(posts)

const reducers = combineReducers({
    posts: (state,action)=>{
        return {exemplo:'Deu certo 1'}
    }
})

function store(){
    return createStore(reducers)
}

export default store