import React, { useState, useEffect } from "react"
import ReactStars from "react-rating-stars-component";


export default function BookCard({searched, title, image, author, rating, id, deleteBook}) {
    // holds book card visibility
    const [showCard, setShownCard] = useState(false);

    // display rating change in log
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    // triggers ation on searched change (visible/invisible card)
    useEffect(() => {
        if(!searched) setShownCard(true)
        else if(title.toLowerCase().includes(searched.toLowerCase())) {
            console.log("called")
            setShownCard(true)
        } else setShownCard(false)
    },[searched])

    // return if card is visible - mutable rating from ReactStars package
    if (showCard){
    return (
        <div className="card">
            <div>
                <img src={image} className="card--image" alt={`image${id}`}></img>
                <h3 className="card--title">{title}</h3>
                <div className="card--author">Author : {author}</div>
                <span className="card--rating">
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        value={parseFloat(rating)}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                    <img src="https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/minus-2-icon-14-256.png" className="card--del" onClick={() => deleteBook(id)}></img>
                </span>
            </div>
        </div>
    )
    }
    else
    {
        return null
    }

}