'use client'

import { useCallback, useEffect, useState } from "react"
import Image from "next/image";
import { useRouter } from "next/navigation";
import Rating from '@mui/material/Rating';

type productDataType = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: any;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        length: number;
        width: number;
        height: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: string[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        [key: string]: any;
    };
    images: string[];
    thumbnail: string;
}
const ProductDetails = ({ productId }: { productId: number }) => {

    const [productData, setProductData] = useState<productDataType>()
    const [allproductData, setAllProductData] = useState<productDataType[]>()
    const [rating, setRating] = useState<number | null>(null)
    useEffect(() => {
        const fetchProductData = async () => {
            const response = await fetch(`https://dummyjson.com/products/${productId}`)
            const value = await response.json()
            setProductData(value)
            setRating(value.rating)
        }
        const fetchAllProductData = async () => {
            const response = await fetch(`https://dummyjson.com/products/category/${productData?.category}`)
            const value = await response.json()
            setAllProductData(value.products)
        }

        fetchProductData();
        fetchAllProductData();
    }, [productId, productData?.category])
    const router = useRouter()
    const handleClick = () => {
        router.push('/')
    }

    return (
        <div>
            <div className="px-[45px] py-[12px] text-white 
            flex items-center justify-between bg-[#1b6392]">
                <h1 className="">Product Details</h1>
                <button onClick={handleClick}
                    className=" px-[12px] py-[6px] uppercase bg-[#fa8232]">back to home page</button>
            </div>
            <div className="px-[30px] mt-[10px]">
                <div className="border-4 border-[#39a1ed] pt-[12px] pb-[25px]
                flex flex-col md:flex-row gap-[20px]">
                    <div className="w-[80%] md:w-1/2 border-4 border-[#95ccf4] flex flex-col justify-center items-center md:items-start border-dotted">
                        <div className="w-[350px] h-[300px] max-w-[300px] max-h-[300px]">

                            {productData?.images && productData.images[0] && (
                                <Image
                                    src={productData.images[0]}
                                    alt={productData.title}
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-contain"
                                />
                            )}
                        </div>
                        <div className="flex ">
                            {
                                productData?.images && productData.images.map((productImage, index) => (
                                    <div key={index}>
                                        <Image src={productImage} alt="all image" width={100} height={100} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-[80%] md:w-1/2 border-4 max-h-full h-full border-[#95ccf4]
                     border-dotted  flex flex-col gap-[15px] ">
                        <Rating name="halfefau-rating-read" value={rating}
                            precision={0.1} readOnly />
                        <h1 className="text-4xl ">{productData?.title}</h1>
                        <p>
                            brand: {productData?.brand}
                        </p>
                        <div className="flex gap-[10px] items-center">
                            < p className="text-[30px] font-[700] text-[#47b0f5] ">
                                $ {productData?.price}
                            </p>
                            {productData &&
                                <p className=" line-through text-[#b2bbc0]"> $
                                    {(productData.price *
                                        (productData?.discountPercentage / 100) +
                                        productData.price).toFixed(2)}
                                </p>
                            }
                            <span className=" bg-[#efd33d] p-1 text-black text-center">{productData?.discountPercentage} % OFF
                            </span>
                        </div>
                    </div>
                </div>
                <div className=" max-w-[400px]">
                    <h1 className=" text-2xl font-[700] mb-[30px] capitalize ml-[15px]"> Product description</h1>

                    <p className=" font-[700] text-[24px] mb-[20px] ml-[20px]">Desrcription</p>
                    <p className="mb-[50px] mx-[20px]">
                        {productData?.description}
                    </p>
                </div>
            </div>
            <div className="px-[30px]">
                <h1 className=" text-[30px] font-semibold mb-3">All products</h1>
                <div className="pl-[25px] grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4
                pb-[20px] justify-items-center gap-[10px]">
                    {
                        allproductData?.map((product) => (
                            <div key={product.id} onClick={() => router.push(`/Products/${product.id}`)}
                                className=" flex gap-[10px] items-center cursor-pointer">
                                <div className=" w-1/4">
                                    <Image src={product?.images[0]}
                                        className="w-full h-full object-contain"
                                        alt="" height={100} width={200} />
                                </div>
                                <div className="w-3/4">
                                    <h1 className="font-[600]">{product.title}</h1>
                                    <p className="text-[#47b0f5]">$ {product.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default ProductDetails