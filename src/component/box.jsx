import React from "react";


class Home extends React.Component {
    
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{fontSize :100, color : this.props.color}}>
                {this.props.icons}</span>
                <p>{this.props.value} {this.props.unit}</p>
                
            </div>
        )
    };
}
export default Home;