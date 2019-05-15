import React, {Component} from 'react';
import {companies} from './mock';

class dropDown extends Component {

    constructor () {
        super ()
        this.state = {name : '', category : ''} 

    }

    dropdownvalue = (e) => {
        let nameValue = e.target.value;
        companies.filter((company,ind) => {
            if(nameValue === company.name) {
                this.setState ({
                    category : company.category,
                    name : company.nameValue
                })
            }
        })

    }

    render () 
    
    {
        return (
            <div>
                <h1> {this.state.category}</h1>
                <select onChange = {this.dropdownvalue}>
                   {companies.map((item,index)=> {
                       return <option>{item.name}kdkmkmkskdskm</option>
                   })}
                </select>
               
            </div>
        )
    }

}

export default dropDown;