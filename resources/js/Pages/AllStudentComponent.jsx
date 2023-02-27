import React,{Component} from "react";
import StudentComponent from "./StudentComponent";

export default class AllStudentComponent extends Component{
    state = {
        student:{
            Name: "sohel",
            Age: 27,
            Email:"sohel@gmail.com"
        }
    }
    render(){
        return(
            <>
                <StudentComponent student = {this.state.student}></StudentComponent>
            </>
        )
    }
}
