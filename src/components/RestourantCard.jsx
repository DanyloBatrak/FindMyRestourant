const RestaurantCard = ({ image, name, location, link }) => {
  return (
    <div className="restourant_card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{location}</p>
      <button>
        <a href={link}>See Location</a>
      </button>
    </div>
  );
};

export default RestaurantCard;
