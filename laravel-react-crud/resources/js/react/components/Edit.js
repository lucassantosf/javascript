import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import AppContainer from './AppContainer'
import api from '../api'

const Edit = ()=>{
    const { id } = useParams()
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onEditSubmit = async()=>{
        setLoading(true)
        try {
            await api.updatePost({
                title,
                description
            },id)
            history.push('/')
        } catch (error) {
            alert('error Edit post')
        } finally {
            setLoading(false) 
        }
    } 

    useEffect(()=>{
        api.getOnePost(id)
        .then(res=>{
            const result = res.data;
            const post = result.data
            setTitle(post.title)
            setDescription(post.description)
        })
    },[])

    return (
        <AppContainer title="Edit POST">
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" value={title} onChange={e=>setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea  className="form-control" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <button type="button" onClick={onEditSubmit} disabled={loading} className="btn btn-success">
                        {loading ? 'Loaging' : 'Edit'}
                    </button>
                </div>
            </form>
        </AppContainer>
    );
}

export default Edit