import React, {Component} from 'react';

export default class NewComponent extends Component{
    state = {
        name: 'sohel',
        age: 27,
        mobile:123233434,
        skills:['react','vue','laravel']
    }
    handleClick=(e)=>{
        console.log('button click');
    }
    handleMouseOver = (e) =>{
        console.log(e.target, e.pageX,e.pageY)
    }
    handleCopy = (e) =>{
        console.log('paragraph has been copied')
    }
    render(){
        return(
            <div>
                <h2>This is class component</h2>
                <p>Name:{this.state.name}</p>
                <p>Age:{this.state.age}</p>
                <p>Mobile:{this.state.mobile}</p>
                <p>Skills:{this.state.skills.join(',')}</p>
                <p onCopy={this.handleCopy}>This is test copy paragraph</p>
                <button type='button' onClick={this.handleClick} onMouseOver={this.handleMouseOver}>click here</button>
            </div>
        )
    }
}
