import React, { useState, useEffect, useCallback, useReducer, useRef, useContext } from 'react';

const ComponentWithHookPractice = () => {
    
    // простые значения типизируются сразу
    const [simpleString,setSimpleString] = useState('')
    const [count,setCount] = useState(0)
    // generic
    const [value,setValue] = useState<number | undefined>(undefined)

    interface IUser{
        id:number;
        name:string;
        role:string;
    }
    const [user,setUser] = useState<IUser>({id:1,name:'Vitaly',role:'admin'})

    const ref1 = useRef<HTMLElement | null>(null)

    interface Itheme {
        color:string;
        size:string;
    }

    const ThemeContext = React.createContext<Itheme>({
        color:'#ccc',
        size:'14px'
    })

    const themeContext = useContext<Itheme>(ThemeContext)
    const a = 1
    const b = 2
    const sum = (a:number,b:number):number => a+b
    const memoizedCallback = useCallback(()=>{sum(a,b)},[a,b])

    // не надо никакой дополнительной типизации в большинстве
    useEffect(()=>{

    },[])

    return  (
        <>
            HOOKS
        </>
    )
}

export default ComponentWithHookPractice;