import react from "react";
import OffComponent from "./OffComponent";
import OnComponent from "./OnComponent";

export default function FanComponent(props){
    const {isOn} = props;
    if(isOn){
        return(
            <OnComponent></OnComponent>
        )
    }else{
        return(
            <OffComponent></OffComponent>
        )
    }
}
