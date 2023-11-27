import React from "react";
import Select from "../components/Inputs/Select/Select";
import Text from "../components/Inputs/Text/Text";
import Checkbox from "../components/Inputs/Checkbox/Checkbox";


const FormItem = (props) => {

    const Wrapper = (props) => {
        return <div>
            {props.label ? <p>{props.label} :</p> : undefined}
            {props.children}
        </div>
    }


    if(props.type === 'select') return <Wrapper {...props}><Select/></Wrapper>
    if(props.type === 'text') return <Wrapper {...props}><Text defaultValue ={props.defaultValue} placeholder={props.placeholder}/></Wrapper>
    if(props.type === 'checkbox') return <Wrapper {...props}><Checkbox/></Wrapper>
}

const renderItems = (config) => { config.map((item) => <FormItem {...item}/>) }

const Form = (props) => {

    return ( 
        <form>
            { [...renderItems(props.config)] }
        </form>
    );
}

export default Form;