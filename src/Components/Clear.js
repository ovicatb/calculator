import React from "react"
import "./Clear.css"

class Clear extends React.Component{

    render() {
        return (
            <div onClick={() => this.props.handleClear()}>
                {this.props.children}
            </div>
        )
    }
}

export default Clear