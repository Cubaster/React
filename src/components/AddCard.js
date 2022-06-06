import React from "react"
import BookForm from "./BookForm"
import Modal from "./Modal"

export default function AddCard({addBook}) {
    // holds visibility state
    const [visible, isVisible] = React.useState(false)

    // toggles vivibility
    const toggleModal = () => {
        isVisible(state =>
            !state)
    }

    // set modal value base on visibility 
    const modal = visible ? (<Modal className="modal" >
        <div className="modal--space">
            <div className="modal--box">
                <h2>Book form</h2>
                <BookForm addBook={addBook} toggleModal={toggleModal} />
            </div>
        </div>
    </Modal>) : null;

    // return add card
    return (
        <div className="addcard">
            <div className="addcard--circle" id="addDiv">
                <img src="https://www.seekpng.com/png/detail/130-1302184_big-image-plus-sign-transparent-background.png" className="addcard--add" onClick={() => toggleModal()} alt="asdasd"></img>
                {modal}
            </div>
        </div>
    )
}