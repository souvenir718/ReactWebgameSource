import React, { PureComponent } from 'react';

class RenderTest extends PureComponent {
    state = {
        conuter : 0,
        string:'hello',
        number:1,
        boolean:true,
        object : {},
        array : []
    };
    // shouldComponentUpdate(nextProps, nextState, nextContext){
    //     if(this.state.conuter !== nextState.conuter){
    //         return true;
    //     }
    //     return false;
    // }

    onClick = () => {
        this.setState({
            array:[...this.state.array, 1]
        });
    };
    render() {
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        );
    }
}

export default RenderTest;