import { useContext } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const HomePageProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const {getAllProduct} = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item));
        toast.success("Add to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }


    return (
        <div className="mt-10">
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestsellers</h1>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-5">
                        {getAllProduct.slice(0,8).map((item, index) => {
                            const { id, title, price,productImageUrl } = item
                            return (
                                <div key={index} className="p-5 w-full md:w-1/3">
                                    <div className="h-full border border-gray-300 overflow-hidden shadow-md cursor-pointer">

                                        <img onClick={()=> navigate(`/productinfo/${id}`)} className="lg:h-60 w-full" src={productImageUrl}/>

                                        <div className="p-5">
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                € {price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                <button onClick={() => addCart(item)} className="bg-gray-900 hover:bg-blue-800 w-full text-white py-[10px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;