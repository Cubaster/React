import React from "react"

export default function BookForm({addBook, toggleModal}){
    // holds base state
    const [formInput, changeInput] = React.useState({author : "", title : "", image : "", rating : ""})
    
    // update author, title or image value
    function update(event){
        changeInput(data => ({
            ...data,
            [event.target.id] : event.target.value
        }))
    }

    // update rating + data control
    function updateRating(event){
        let rate = parseFloat(event.target.value)
        if(rate > 5.0) rate = 5.0
        if(rate < 0.0) rate = 0.0
        changeInput(data => (
            {
            ...data,
            [event.target.id] : rate
        }))
    }

    // action on submit button
    function submitForm(event){
        event.preventDefault()
        addBook(formInput)
        toggleModal()
    }

    // return form
    return(
        <form className="form">
            <div className="form--layout">
                <label htmlFor="author" className="form-label">Author: </label>
                <input className="form--input" type="text" id="author" value={formInput.author} onChange={update}></input>
            </div>
            <div className="form--layout">
                <label htmlFor="title" className="form-label">Title: </label>
                <input className="form--input" type="text" id="title" value={formInput.title} onChange={update}></input>
            </div>
            <div className="form--layout">
                <label htmlFor="image" className="form-label">Image: </label>
                <input className="form--input" type="url" id="image" placeholder="image URL" value={formInput.image} onChange={update}></input>
            </div>
            <div className="form--layout">
                <label htmlFor="rating" className="form-label">Rating: </label>
                <input className="form--input" type="number" id="rating" min={0} max={5} step={0.5} value={formInput.rating} onChange={updateRating}></input>
            </div>
            <button className="submit-button" onClick={submitForm} type="button">Submit</button>
        </form>
    )
}