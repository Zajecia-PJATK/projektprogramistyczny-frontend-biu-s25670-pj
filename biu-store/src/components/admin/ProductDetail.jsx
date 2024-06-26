import { Link } from "react-router-dom";

const ProductDetail = () => {
    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                <h1 className=" text-xl font-bold">All Products</h1>
                <Link to={'/addproduct'}>
                <button className="px-5 py-2 bg-black text-white rounded-lg">Add Product</button>
                </Link>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-gray-200" >
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-200 text-slate-700 bg-slate-100 font-bold fontPara">No.</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-200 text-slate-700 bg-slate-100">Name</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-200 text-slate-700 bg-slate-100">Action</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-200 text-slate-700 bg-slate-100">Action</th>
                        </tr>
                        <tr className="text-gray-600">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-200 stroke-slate-500 text-slate-500 ">
                                1.
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-200 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                {'name'}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-200 stroke-slate-500 text-slate-500 text-green-800 cursor-pointer ">
                                Edit
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-200 stroke-slate-500 text-slate-500 text-red-800 cursor-pointer ">
                                Delete
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductDetail;