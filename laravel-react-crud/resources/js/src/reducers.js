const initialState = {
  posts: [ ],
  loading: false
};

export default function redux(state = initialState, action) {
    switch (action.type) {
      case "FETCH_POSTS_SUCCESS":
        return {...state, posts: action.posts}
      case "POST_DELETE_SUCCESS": 
        return {...state, posts: action.posts} 
      case "ADD_POSTS_PENDING":
        return {...state, loading: true} 
      case "ADD_POSTS_SUCCESS":
        return {...state, loading: false} 
      case "ADD_POSTS_ERROR":
        return {...state, loading: false}  
      case "UPDATE_POSTS_PENDING":
        return {...state, loading: true} 
      case "UPDATE_POSTS_SUCCESS":
        return {...state, loading: false} 
      case "UPDATE_POSTS_ERROR":
        return {...state, loading: false}       
      default:
        return state
    }
}