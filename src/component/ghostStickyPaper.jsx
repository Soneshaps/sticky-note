import React from 'react';
const GhostStickyPaper = () => {
    const deleteNote =()=>{

    }
    return ( 
        <div className="note-main-div p-1 m-1">
        <div className="d-flex flex-column">
            <div className="title-area mb-1 text p-2">

            </div>    
            <div className="detail-area mb-1 text p-2">
                
            </div>
            <div className="d-flex justify-content-end">
            <button className="action-button btn-danger " onClick={() => this.deleteNote()}>-</button>
            </div>
        </div>
    </div>);
     );
}
 
export default GhostStickyPaper;