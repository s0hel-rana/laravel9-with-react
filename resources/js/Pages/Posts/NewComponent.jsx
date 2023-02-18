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
    handleStateChange = () =>{
        this.setState({
            name:'rana',
            age:34,
            mobile:9898978675,
            skills:['python','java','php']
        });
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Name',this.state.name);
        console.log('Age',this.state.age);
        console.log('Mobile',this.state.mobile);
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
                <button type='button' onClick={this.handleStateChange}>change the value</button>

                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text" name="name" onChange={this.handleChange}/><br/>
                    Age: <input type="text" name="age" onChange={this.handleChange} /><br/>
                    Mobile: <input type="text" name="mobile" onChange={this.handleChange} /><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
