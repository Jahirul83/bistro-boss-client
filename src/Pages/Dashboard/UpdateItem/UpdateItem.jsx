import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();
    const { register, handleSubmit } = useForm();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an URL
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        // console.log(res.data);
        if (res.data.success) {
            // now send the menu item data in the server with image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url

            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);

            if (menuRes.data.modifiedCount > 0) {
                // popup

                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };
    return (
        <div>
            <SectionTitle heading="Update an Item" subHeading="Refresh info"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>
                        </div>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Recipe Name"
                            {...register("name", { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-6">
                        {/* category */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <select defaultValue={category} {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">select a category</option>
                                <option value="salad">salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soup">soup</option>
                                <option value="dessert">dessert</option>
                                <option value="drinks">drinks</option>
                            </select>
                        </label>
                        {/* price */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* recipe details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea defaultValue={recipe} {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                    </label>
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Update Menu item
                        <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;