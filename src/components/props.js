import React, {Component} from 'react';

class counterNumber extends Component {

    constructor () {
        super () 
        this.state = {
            inputValue : '',
            listItems : [] 
        }
    }

    inputValueHandler = (e) => {
        this.setState ({
            inputValue : e.target.value
        })
    }

    addHandler = () => {
        const newText = this.state.inputValue;
        const listItems = this.state.listItems;
        if( newText === ''){
            alert("item is empty")
        }else {
            listItems.push(newText)
            this.setState({listItems})
        }
        
        // console.log("listitem", listItems)
        // console.log('adding');
    }

    removeItem= (index) => {
        debugger;
        let listItems = this.state.listItems;
        let removeItem = listItems.filter((item,ind)=> index !== ind)
        this.setState({
            listItems : removeItem
        })
    }

    accendingHandler  = () => {
        let listItems = this.state.listItems;
        let accendingList = listItems.sort()
        this.setState({
            listitems : accendingList
        })
    }

    deccendingHandler  = () => {
        let listItems = this.state.listItems;
        let deccendingList = listItems.reverse()
        this.setState({
            listitems : deccendingList
        })
    }

    render () {
        return (
            <div>
           
    
           <h1>Enter Some Value</h1>
            <input type = 'text' onChange = {this.inputValueHandler}></input> 
            <button onClick = {this.addHandler}>Add</button> 
            <button onClick = {this.accendingHandler}>Accending</button>
            <button onClick= {this.deccendingHandler}>Decending</button>
            <h1>{this.state.inputValue}</h1> 
            <ul>
                    {this.state.listItems.map((item,index)=>{
                        return <li>
                            {item} <button onClick = { () => this.removeItem(index)} >Remove</button>
                        </li>
                    })}
                    </ul>

                   
           
   
            </div>
        )
    }

}

export default counterNumber;