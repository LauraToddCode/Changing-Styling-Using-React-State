import React from "react";

class Navbar extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            pointedCorners: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(state => ({
            pointedCorners: !state.pointedCorners           
        }))
    }

    render() {

        let toggleBtnClass = this.state.pointedCorners ? "roundedButton" : "pointedButton";


        return(
            <div>
                
                <div id="toggleMenuBtn" className={toggleBtnClass} onClick={this.handleClick}>

                    <div id="btnText">Click Me!</div>

                </div>

            </div>
        )
    }
    
}

export default Navbar;