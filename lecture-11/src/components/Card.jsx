const Card = ({ title, image, description, actors, action }) => {
    return (
        <div className="card">
            <img src={image} alt="" className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <span className="card-actors">Actors: {actors}</span>
                <button className="card-button" onClick={() => action(title)}>Read More</button>
            </div>
        </div>

    )
}

export default Card