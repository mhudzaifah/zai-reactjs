import React from "react";

class ClassComponent extends React.Component {
    state = {
        value: 0
    }
   
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         value: 0
    //     }

    //     this.handleplus = this.handleplus.bind(this);
    //     this.handleminus = this.handleminus.bind(this);
    // }

    // handleplus() {
    //     this.setState({value: this.state.value + 1});
    // }

    // handleminus() {
    //     if(this.state.value > 0){
    //         this.setState({value: this.state.value - 1});
    //     }  
    // }
    handleplus = () => {
        this.setState({value: this.state.value + 1});
    }

    handleminus = () => {
        if(this.state.value > 0){
            this.setState({value: this.state.value - 1});
        }  
    }

    render() {
        return(
            <div>
                <center>
                <h1>Assalamualaikum</h1>
                <h3>Amati {this.props.gambar} di bawah ini </h3>
                <img width={400} src="https://images.pexels.com/photos/1583207/pexels-photo-1583207.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" "></img>
                <br></br>
                <button onClick={this.handleminus}>-</button>
                <span>{'  '}{this.state.value}{'  '}</span>
                <button onClick={this.handleplus}>+</button>
                </center>
            </div>
        )
    }
}

export default ClassComponent;