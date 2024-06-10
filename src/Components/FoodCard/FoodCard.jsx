import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;
    const { user } = useAuth();
    const navigate = useNavigate()

    const handleAddToCart = food => {
        if (user && user.email) {
            // todo: send email cart item to database
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to login page
                    navigate('/login')
                }
            });

        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-4 top-4 px-4 bg-stone-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-outline text-yellow-600 bg-slate-100 border-0 border-b-4 mt-4">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;