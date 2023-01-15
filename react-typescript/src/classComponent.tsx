import React, {Component} from "react";

type CounterState = {
    count: number
}

type CounterProps = {
    readonly title? : string
}

class Counter extends Component <CounterProps,CounterState> {

    constructor(props: CounterProps) {
        super(props)
        this.state = {
            count: 0
        }
    }
    
    componentDidMount():void {

    }
    
    shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
        return true;
    }

    handleClick = (e: React.MouseEvent) => {
        
        this.setState(({ count }) =>({
            count: ++count
        }));
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.state.count}</h1>
                <button onClick = {this.handleClick} > + 1 </button>
            </div>
        )
    }
}

export default Counter;