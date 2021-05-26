import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import AppContainer from './AppContainer'
import api from '../api'

const Add = ()=>{
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onAddSubmit = async()=>{
        setLoading(true)
        try {
            await api.addPost({
                title,
                description
            })
            history.push('/')
        } catch (error) {
            alert('error add post')
        } finally {
            setLoading(false) 
        }
    }
  
    return (
        <AppContainer title="Add POST">
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
                    <button type="button" onClick={onAddSubmit} disabled={loading} className="btn btn-success">
                        {loading ? 'Loaging' : 'Add'}
                    </button>
                </div>
            </form>
        </AppContainer>
    );
}

export default Add