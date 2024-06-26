import Layout from "../../components/layout/Layout";

const products = [
    {
        id: 1,
        name: 'TM MK17 MOD',
        imageSrc:
            'https://www.tokyo-marui.co.jp/appimg/product/p_old_210119065450.jpg',
        href: '#',
        price: '€ 199',
        color: 'Black',
        imageAlt: 'TM MK17 MOD',
        quantity: 1,
    },
]

const UserDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));

    return (
        <Layout>
            <div className=" container mx-auto px-4 py-5 lg:py-8">
                <div className="top ">
                        <div className="">
                        <h1 className=" text-center text-lg">
                                <span className=" font-bold">Name: </span>
                                {user?.name}
                            </h1>
                            {/* Email  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Email: </span>
                                {user?.email}
                            </h1>
                            {/* Date  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Since: </span>
                                {user?.date}
                            </h1>
                        </div>
                </div>

                <div className="bottom">
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                        <h2 className=" text-2xl lg:text-3xl font-bold">Order Details</h2>

                        <div className="mt-5 flex flex-col overflow-hidden border border-gray-100 md:flex-row">
                            <div className="w-full border-r border-gray-100 bg-gray-50 md:max-w-xs">
                                {/* left  */}
                                <div className="p-8">
                                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                        <div className="mb-4">
                                            <div className="text-sm font-semibold text-black">Order Id</div>
                                            <div className="text-sm font-medium text-gray-900">#123456789</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Date</div>
                                            <div className="text-sm font-medium text-gray-900">28 June, 2024</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Total Amount</div>
                                            <div className="text-sm font-medium text-gray-900">€ 199</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Order Status</div>
                                            <div className="text-sm font-medium text-green-800">Confirmed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* right  */}
                            <div className="flex-1">
                                <div className="p-8">
                                    <ul className="-my-7 divide-y divide-gray-200">
                                        {products.map((product) => (
                                            <li
                                                key={product.id}
                                                className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                                            >
                                                <div className="flex flex-1 items-stretch">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-24 w-24 rounded-lg border border-gray-200 object-contain"
                                                            src={product.imageSrc}
                                                            alt={product.imageSrc}
                                                        />
                                                    </div>

                                                    <div className="ml-5 flex flex-col justify-between">
                                                        <div className="flex-1">
                                                            <p className="text-sm font-bold text-gray-900">{product.name}</p>
                                                            <p className="mt-1.5 text-sm font-medium text-gray-500">{product.color}</p>
                                                        </div>

                                                        <p className="mt-4 text-sm font-medium text-gray-500">x {product.quantity}</p>
                                                    </div>
                                                </div>

                                                <div className="ml-auto flex flex-col items-end justify-between">
                                                    <p className="text-right text-sm font-bold text-gray-900">{product.price}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserDashboard;