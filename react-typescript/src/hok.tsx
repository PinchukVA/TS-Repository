import React, { useState} from 'react';

type BaseProps = {
    primTitle:string,
    secTitle: string
}

interface ButtonProps {
    primTitle:string,
    secTitle: string
    toogleStatus?:Boolean,
    toogle?: () => void,
}

const Buttton = (props:ButtonProps) => (
    <button onClick={props.toogle}>
        {props.toogleStatus ? props.primTitle : props.secTitle}
    </button>
)

const WithToogle = (PassComponent:React.ComponentType<ButtonProps>) => {
    const [togledStatus, setTogledStatus] = useState(false)
    return (props:BaseProps) => {
        

        return (
            <PassComponent 
            {...props}
            toogle={()=>setTogledStatus(!togledStatus)}
            toogleStatus={togledStatus}
            />
        )
    }
}

const ToogleButton = WithToogle(Buttton)

const TestComponent = () => {
    return (
        <ToogleButton primTitle={'Title'} secTitle={'Secondary Title'}/>
    )
}

export default TestComponent;