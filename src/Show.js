import React, { Component } from 'react';

class Title extends Component {
    render(){
        return(
            <div>
                <h1>{this.props.showTitle}</h1>
            </div>
        )
    }
}

class Plot extends Component {
    render(){
        return(
            <div>
                <p>{this.props.showPlot}</p>
            </div>
        )
    }
}

class Poster extends Component {
    render(){
        return(
            <div>
                <img src={this.props.showPoster} alt={this.props.showTitle} />
            </div>
        );
    }
};

class Show extends Component {
    render() {
        var show = this.props.show
        return (
            <div>
                <Title showTitle={show.title}/>

                <Poster showPoster={show.poster}>
                    <h1>Show component</h1>
                    <p>This Thursday: </p>
                </Poster>
                <Plot showPlot={show.plot}/>
            </div>
        );
    }
};

export default Show;
