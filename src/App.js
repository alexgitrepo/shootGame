import React from 'react';
import './App.css';
import Cell from "./Cell";
import dogWov from "./audio/dog.mp3"

class App extends React.Component {
    state = {
        cellCount: 8,
        currentCell: 0,
        gameCount: 0
    }
    audio = new Audio(dogWov)

    componentDidMount() {
        this.changeCurrentCell()
    }

    hitAttmept = () => {
        let newCount = ++this.state.gameCount
        this.audio.currentTime = 0.0
        this.audio.play()
        this.setState({gameCount: newCount})
    }


    changeCurrentCell = () => {
        setInterval(() => {
            this.getRandomCell()
        }, 700)
    }
    getRandomCell = () => {
        let newCell = Math.floor(Math.random() * this.state.cellCount);
        this.setState({currentCell: newCell})

    }

    render() {
        const gameField = []
        for (let i = 0; i <= this.state.cellCount; i++) {
            if (this.state.currentCell === i) {
                gameField.push(<Cell hitAttmept={this.hitAttmept} active={true}/>)
            } else {
                gameField.push(<Cell hitAttmept={this.hitAttmept} active={false}/>)
            }
        }

        return (
            <div className="App">
                <header className="mainWrapper">
                    {gameField}
                </header>
                <div>{this.state.gameCount}</div>
            </div>
        );
    }

}

export default App;