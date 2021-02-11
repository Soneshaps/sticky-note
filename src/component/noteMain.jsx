import React, { Component } from 'react';
import "./css/notemain.css"
class NoteMain extends Component {
    state = { 
        items:[],
        validation:''
        }

     componentDidMount(){
        
         let data = localStorage.getItem('myItems')
        
         if(data !== ""){
         console.log(data)
         let list = [];
         list = JSON.parse(data)
         if(list != null){
         this.setState({items : this.state.items.concat(list)}) ;
        }}
        }   
     addNote = (e) =>{
        if(this.theTitle.value!=="" && this.theNote.value!==""){
            var newItems ={
                title : this.theTitle.value,
                note : this.theNote.value
            };
            this.setState({items : this.state.items.concat(newItems)}) ;
            localStorage.setItem('myItems',JSON.stringify(newItems));
            this.theNote.value = "" ;
            this.theTitle.value = "" ;
            this.setState({validation:''})           
        }else{
            this.setState({validation:'Please Enter all the feild'})
        }
        e.preventDefault();

     }
     deleteNote=(index)=>{
        var temp_data = localStorage.removeItem ('myItems')
        const itemsD = this.state.items.filter((item,j) =>index !== j);
        localStorage.removeItem('myItems',temp_data)
        this.setState({items : itemsD});
     }

    render() { 
        
        return ( 
            <div>
            <div className="note-main row d-flex justify-content-center">
            <div className="note-main-div col-xs-12 mt-2 p-1">
           <form  className="d-flex flex-column" onSubmit={this.addNote}>
               
            <input type="text" className="title-area mb-1 text p-2" placeholder="Enter Title" ref={(title)=>this.theTitle=title}/>
            
            <textarea  className="detail-area text p-2" placeholder="Enter Detail" ref={(note)=>this.theNote=note}/>
            <div className="d-flex justify-content-end">
            <button className="action-button add-button mt-1" type="submit">+</button>
            </div>
            </form>            
        </div>
        <div className="error danger col-12 text-center mt-1">{this.state.validation}</div>
            </div>
                    <div className="note-display m-2 d-flex flex-row-reverse flex-wrap justify-content-center">
                    {this.display()}
                    </div>
                        </div>
         );
    }

    display() {
        return this.state.items.map((item, index) =>
         <div key={index} className="note-main-div p-1 m-1">
            <div className="d-flex flex-column">
                <div className="title-area mb-1 text p-2">
                    {item.title}
                </div>    
                <div className="detail-area mb-1 text p-2">
                <p>{item.note}</p>
                </div>
                <div className="d-flex justify-content-end">
                <button className="action-button btn-danger " onClick={() => this.deleteNote(index)}>-</button>
                </div>
            </div>
        </div>);
    }
}
 
export default NoteMain;