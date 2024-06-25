import Layout from "../../components/layout/Layout";
import { Trash } from 'lucide-react'

const products = [
    {
        id: 1,
        name: 'M40A5',
        href: '#',
        price: '€ 90',
        originalPrice: '€ 100',
        discount: '10% Off',
        color: 'FDE',
        imageSrc: 'https://www.tokyo-marui.co.jp/appimg/product/p_old_210121134031.jpg',
    },
    {
        id: 2,
        name: 'G17',
        href: '#',
        price: '€ 1000',
        originalPrice: '€ 2000',
        discount: '50% Off',
        color: 'Black',
        imageSrc: 'https://www.tokyo-marui.co.jp/appimg/product/p_old_210121082543.jpg',
    }
]

const CartPage = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 max-w-7xl px-2 lg:px-0">
                <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Shopping Cart
                    </h1>
                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
                            <ul role="list" className="divide-y divide-gray-200">
                                {products.map((product) => (
                                    <div key={product.id} className="">
                                        <li className="flex py-6 sm:py-6 ">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.name}
                                                    className="sm:h-32 sm:w-64 h-12 w-24 object-contain object-center"
                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                    <div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-sm">
                                                                <a href={product.href} className="font-semibold text-black">
                                                                    {product.name}
                                                                </a>
                                                            </h3>
                                                        </div>
                                                        <div className="mt-1 flex text-sm">
                                                            <p className="text-sm text-gray-500">{product.color}</p>
                                                        </div>
                                                        <div className="mt-1 flex items-end">
                                                            <p className="text-xs font-medium text-gray-500 line-through">
                                                                {product.originalPrice}
                                                            </p>
                                                            <p className="text-sm font-medium text-gray-900">
                                                                &nbsp;&nbsp;{product.price}
                                                            </p>
                                                            &nbsp;&nbsp;
                                                            <p className="text-sm font-medium text-green-800">{product.discount}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <div className="mb-2 flex">
                                            <div className="min-w-24 flex">
                                                <button type="button" className="h-7 w-7">
                                                    -
                                                </button>
                                                <input
                                                    type="text"
                                                    className="mx-1 h-7 w-9 rounded-md border text-center"
                                                    defaultValue={1}
                                                />
                                                <button type="button" className="flex h-7 w-7 items-center justify-center">
                                                    +
                                                </button>
                                            </div>
                                            <div className="ml-6 flex text-sm">
                                                <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                                                    <Trash size={12} className="text-red-800" />
                                                    <span className="text-xs font-medium text-red-800">Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </section>
                        <section aria-labelledby="summary-heading" className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0">
                            <h2 id="summary-heading" className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4">
                                Price Details
                            </h2>
                            <div>
                                <dl className=" space-y-1 px-2 py-4">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-gray-800">Price</dt>
                                        <dd className="text-sm font-medium text-gray-900">€ 2100</dd>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <dt className="flex items-center text-sm text-gray-800">
                                            <span>Discount</span>
                                        </dt>
                                        <dd className="text-sm font-medium text-green-800">- € 1010</dd>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <dt className="flex text-sm text-gray-800">
                                            <span>Delivery</span>
                                        </dt>
                                        <dd className="text-sm font-medium text-green-800">Free</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                        <dt className="text-base font-medium text-gray-900">Total</dt>
                                        <dd className="text-base font-medium text-gray-900">€ 1090</dd>
                                    </div>
                                </dl>
                                <div className="px-2 pb-4 font-medium text-green-800">
                                <div className="flex gap-4 mb-6">
                                    <button className="w-full px-4 py-3 text-center text-gray-100 bg-gray-900 hover:bg-blue-800 rounded-xl">
                                        Buy
                                    </button>
                                </div>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default CartPage;