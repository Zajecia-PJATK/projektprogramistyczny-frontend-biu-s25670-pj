import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";

const productData = [
    {
        id: 1,
        image: 'https://www.tokyo-marui.co.jp/appimg/product/p_old_210121140606.jpg',
        title: 'L96 AWS Sniper Rifle',
        desc: 'A highest-quality, made of hard polymer and metal L96 AWS sniper rifle replica by a legendary manufacturer - Tokyo Marui. It is characteristic for the excellent quality of materials used, the way parts fit together and reliability of operation - this is, however, expected of such a manufacturer.',
        price: 499,
        trendingProductName: 'Sniper',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://www.tokyo-marui.co.jp/appimg/product/p_old_210119065450.jpg',
        title: 'TM MK17 MOD',
        desc: 'The replica was made of metal and durable polymer - ABS. The upper receiver, external barrel, iron sights and small elements such as the trigger, magazine release button, RIS rails or fire mode selector were made of metal. The lower receiver, stock and profiled pistol grip were made of polymer.',
        price: 199,
        trendingProductName: 'Rifle',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://www.tokyo-marui.co.jp/appimg/product/p_old_201214084523.jpg',
        title: 'HK417 D Replica',
        desc: 'A replica made in cooperation by Umarex and VFC. Thanks to licensing from real firearm manufacturer, the Heckler&Koch GmbH, the replica features real markings and naming. The replica is made in 1:1 scale and reflects all details of the real firearm and weighs the same.',
        price: 599,
        trendingProductName: 'Rifle',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://www.tokyo-marui.co.jp/appimg/product/p_old_210123043052.jpg',
        title: 'M92F',
        desc: 'M92F by already a classic, Japanese Tokyo Marui will be quite a treat for every fan of US Army sidearms. Like most sidearm replicas by Tokyo Marui, M92F was also made mostly from high quality polymer. ',
        price: 299,
        trendingProductName: 'Pistol',
        quantity: 1,
    },
    {
        id: 5,
        image: 'https://www.tokyo-marui.co.jp/appimg/product/p_old_210121082543.jpg',
        title: 'G17',
        desc: 'G17, Japanese Tokyo Marui will be quite a treat for every fan of Austrian Army sidearms. Like most sidearm replicas by Tokyo Marui, G17 was also made mostly from high quality polymer.',
        price: 99,
        trendingProductName: 'Pistol',
        quantity: 1,
    },
    {
        id: 6,
        image: 'https://www.tokyo-marui.co.jp/appimg/product/p_old_210121134031.jpg',
        title: 'M40A5',
        desc: 'The replica is equipped with 4 RIS 22 mm universal mounting rails, which enables the attachment of a wide array of optical sights and additional accessories, for example, bipods. The construction consists of 3 main elements: the forestock with the stock and the trigger box with the barrel.',
        price: 799,
        trendingProductName: 'Sniper',
        quantity: 1,
    }
]

const AllProduct = () => {
    const navigate = useNavigate();
    return (
        <Layout>
    <div className="py-8">
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">All Products</h1>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-5">
                        {productData.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-5 w-full md:w-1/3">
                                    <div className="h-full border border-gray-300 overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={()=> navigate('/productinfo')}
                                                className="lg:h-60 w-full"
                                                src={image}
                                            />
                                        <div className="p-5">
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                € {price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                <button className="bg-gray-900 hover:bg-blue-800 w-full text-white py-[10px] rounded-lg font-bold">
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
        </Layout>
    );
}

export default AllProduct;