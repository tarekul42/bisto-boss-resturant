

const FoodCard = ({ item }) => {
    const {name, image, price, recipe} = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={`${name} image`} /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 rounded-md bg-slate-800 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{image}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-200 border-orange-400 border-0 border-b-4 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;