import React from "react";
import "../styles/Header.css";
import "../styles/MovingPicture.css"
class Header extends React.Component {
    state = {
        score: 0,
        idArray: ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven"],
        clickedArray: []
    };

    handleShuffle = id => {
        let clickedId = id.target.id
        let whereIndex = this.state.clickedArray.indexOf(clickedId)
        if (whereIndex !== -1) {
            alert("already clicked, game over")
            this.setState({ score: 0 });
            this.setState({clickedArray: []})
        }
        else { 
            this.state.clickedArray.push(clickedId)
            this.setState({ score: this.state.score + 1 });
        }

        var newArray = this.state.idArray
            for (var i = newArray.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = newArray[i];
                newArray[i] = newArray[j];
                newArray[j] = temp;
            }
        this.setState({idArray: newArray})
    };
        
        
    render() {
        return (
        <div>
            <div id="banner">
                <div id="words">CLICKY SUNNY GAME</div>
                <div id="alert"></div>
                <div id="score">Score: {this.state.score}</div>
            </div>
            <button className="box" id={this.state.idArray[0]} onClick={this.handleShuffle}>
            </button>
            <button className="box" id={this.state.idArray[1]} onClick={this.handleShuffle}>
            </button>
            <button className="box" id={this.state.idArray[2]} onClick={this.handleShuffle}>
            </button>
            <button className="box" id={this.state.idArray[3]} onClick={this.handleShuffle}>
            </button>
            <button className="box" id={this.state.idArray[4]} onClick={this.handleShuffle}>
            </button>
            <button className="box" id={this.state.idArray[5]} onClick={this.handleShuffle}>
            </button>
            <button className="box" id={this.state.idArray[6]} onClick={this.handleShuffle}>
            </button>
            <button className="box" id={this.state.idArray[7]} onClick={this.handleShuffle}>
            </button>
            <button className="box" id={this.state.idArray[8]} onClick={this.handleShuffle}>
            </button>
            <button className="box" id={this.state.idArray[9]} onClick={this.handleShuffle}>
            </button>
            <button className="box" id={this.state.idArray[10]} onClick={this.handleShuffle}>
            </button>
            <button className="box" id={this.state.idArray[11]} onClick={this.handleShuffle}>
            </button>
        </div>
        )
    }
}

export default Header;

//  handleIncrement = () => {
//    this.setState({ count: this.state.count + 1 });
//  };

//  render() {
//    return (
//      <div className="card text-center">
//        <div className="card-header bg-primary text-white">
//          <h3 className="card-title">Click Counter!</h3>
//        </div>
//        <div className="card-body">
//          <p className="card-text">Click Count: {this.state.count}</p>
//          <button className="btn btn-primary" onClick={this.handleIncrement}>
//            Increment
//          </button>
//        </div>
//      </div>
//    );
//  }
//}

//export default Counter;
