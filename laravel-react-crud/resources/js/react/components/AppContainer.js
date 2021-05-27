import React from 'react'

const AppContainer = ({title,children})=>{
    return (
        <div className="container">
            <div className="card">
                <h4 className="card-header">Laravel React JS</h4>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div> 
    );
}

export default AppContainer