import React from "react";
import { useState } from "react";


export class ShopList extends React.Component{
    constructor(props){
        super(props);
        const dataUrl = "https://cs378-c1009-default-rtdb.firebaseio.com/"
        this.state = {
            input : "",
            list : [],
            url : "https://cs378-c1009-default-rtdb.firebaseio.com/",
            firstInput : ""
        };
    }

    getList = () => {
        const [firstInputValue, setFirstInputValue] = useState(null);
        const [secondInputValue, setSecondInputValue] = useState(null);
        const [dataPostResult, setDataPostResult] = useState(null);
        const [dataRetrieveResult, setDataRetrieveResult] = useState(null);
        const [postType, setPostType] = useState(null);
        const [retrieveType, setRetrieveType] = useState(null);

        const dataURL = "https://cs378-c1009-default-rtdb.firebaseio.com/"

    }

    showList = () => {
        let show = []
        for(let i = 0; i < this.state.list.length; i++){
            var listItem = this.state.list[i]
            show.push(<li>{listItem}</li>)
        }
        return show;
    }

    
    handleInputChange = (e) =>{
        //alert(e.target.value);
        this.setState({
        input: e.target.value
        });
    //this.state.search = e.target.value;
    }

    addItem = () => {
        var item = this.state.input;

        if(item !== ""){
            this.setState({
                list : [
                ...this.state.list,
                item
                ]
            });
        }
         
         this.setState({
            input: ''
          })
    }

    sendData = () => {

    }

    render() {
        return(
            <div className="ShopList">
            <div className="Testing">
                do testing here
                <div>
                send
                <input className="itemToAdd" type="text" value={this.state.input} onChange={this.handleInputChange}/>
                <button className="btn" type="button" onClick={this.sendData}>+</button>
                </div>
                <div>
                <button className="btn" type="button" onClick={this.addItem}>Get</button>
                </div>
                
                done test
            </div>
            <div className="list">
                <h4>This is your shopping list</h4>
                {
                    this.showList()
                }
            </div>
            <div className= "input">
                <input className="itemToAdd" type="text" value={this.state.input} onChange={this.handleInputChange}/>
                <button className="btn" type="button" onClick={this.addItem}>+</button>
            </div>
            </div>
            
        );
    }
}