import React from "react";
import ReactDOM from "react-dom";

// reference to file root
const modalRoot = document.getElementById("root")

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    // add div to root 
    componentDidMount() {
        // The portal element is inserted in the DOM tree after
        // the Modal's children are mounted, meaning that children
        // will be mounted on a detached DOM node. If a child
        // component requires to be attached to the DOM tree
        // immediately when mounted, for example to measure a
        // DOM node, or uses 'autoFocus' in a descendant, add
        // state to Modal and only render the children when Modal
        // is inserted in the DOM tree.
        modalRoot.appendChild(this.el);
    }

    // destroy div
    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    // create new window 
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}

export default Modal
