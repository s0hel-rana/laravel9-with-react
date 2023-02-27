import React,{Component} from 'react';
export default class StudentComponent extends Component{
    render(){
        const {student} = this.props;
        return(
            <>
                <h2>Student Details</h2>
                <p>Name:{student.Name}</p>
                <p>Age:{student.Age}</p>
                <p>Email:{student.Email}</p>
            </>
        )
    }
}
