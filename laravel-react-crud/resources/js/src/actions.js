import api from './api'   
 
export const getPosts = ()=>{
    return (dispatch)=>{
        api.getAllPosts().then(res=>{ 
            const result = res.data; 
            dispatch({
                type: "FETCH_POSTS_SUCCESS",
                posts: result.data
            })
        }) 
    }
}

export const onAddSubmit = (title,description,history)=>{ 
    return async (dispatch)=>{
        
        dispatch({
            type: "ADD_POSTS_PENDING"
        })

        try {
            await api.addPost({
                title,
                description                
            })
            dispatch({
                type: "ADD_POSTS_SUCCESS"
            })

            history.push('/')

        } catch (error) {
            alert('error add post')
        } finally {
            dispatch({
                type: "ADD_POSTS_ERROR"
            })
        }
    } 
}

export const onEditSubmit = (id, title, description, history)=>{
    return async(dispatch)=>{

        dispatch({
            type: "UPDATE_ADD_POSTS_PENDING"
        })

        try {
            await api.updatePost({
                title,
                description
            },id)

            dispatch({
                type: "UPDATE_ADD_POSTS_SUCCESS"
            })

            history.push('/')

        } catch (error) {
            alert('error Edit post')
        } finally {
            dispatch({
                type: "UPDATE_ADD_POSTS_ERROR"
            })
        }
    }
}
 

export const deletePost = (posts, id)=>{
    return async(dispatch)=>{
        await api.deletePost(id)
            .then(()=>{
                const newPosts = posts.filter((obj)=>obj.id !== id);
                dispatch({
                    type: "POST_DELETE_SUCCESS",
                    posts: newPosts
                })
            })
            .catch(err=>{
                console.log(err)
            });
    }
}