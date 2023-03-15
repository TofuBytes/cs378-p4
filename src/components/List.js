import React, { useEffect, useState } from "react";


const databaseURL = "https://cs378-c1009-default-rtdb.firebaseio.com/"
let itemNo = 0;


export const List = (props) => {

    const{
        uid
    } = props;

    const [currentList, setList] = useState([]);
    const [item, setItem] = useState('');
    
    useEffect(( ) => {
        getList();
    }, []);

    const saveList = () => {
        if(uid === ''){
            alert("You must be signed in to save")
            return;
        }
        const sampleDict = {
          text: currentList,
        };
        return fetch(`${databaseURL + "/" + uid}/.json`, {
          method: "PUT",
          body: JSON.stringify(sampleDict)
        }).then((res) => {
          if (res.status !== 200) {
            alert("Save Error");
          } else {
            alert("List Saved!");
            return;
          }
        });
      };

    
    const getList = () => {
        if(uid === ''){
            return;
        }
        fetch(`${databaseURL + "/" + uid}/.json`)
          .then((res) => {
            console.log(res);
            if (res.status !== 200) {
              //alert("error getting list");
            } else {
                //alert("data retrieved!");
              return res.json();
            }
          })
          .then((res) => {
            //alert(JSON.stringify(dataList));
            setList(res.text);
            }
          );
      };
    

    return(
        <div className="List">
            <div>
            <h5>
                This is your shopping list
            </h5>
            </div>
            <div className="Show">
            <ul>
                {currentList.map(currentList => (
                <li key={currentList.id}>{currentList.item}</li>
                ))}
            </ul>
            </div>

            <div className="addItem">
                <input className="itemToAdd" type="text" value={item} onChange={(e) => setItem(e.target.value)}/>
                <button className="btn" onClick={() => {
                        setItem('');
                        if(item.trim()){
                            currentList.push({
                                id: itemNo++,
                                item: item.trim(),
                        });
                        }

                } }>Add Item</button>
            </div>
            <button className="btn" onClick={() => {saveList()}}>Save List</button>
            <button className="btn" onClick={() => {
                setList([]);
            }}>ClearList</button>

        </div>
    )
}