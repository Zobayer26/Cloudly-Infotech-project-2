'use client'

import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"

type DataItem = {
    slug: string;
    name: string;
    url: string;
}

type productDataType = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
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

const AllCategory = () => {
    const [data, setData] = useState<DataItem[]>([])
    const [smartphoneData, setSmartPhoneData] = useState<productDataType[]>()
    const [laptoptData, setLaptoptData] = useState<productDataType[]>()
    const [groceriesData, setGroceriesData] = useState<productDataType[]>()
    const router = useRouter()

    useEffect(() => {

        async function fetchCategoryData() {
            const response = await fetch('https://dummyjson.com/products/categories/')
            const value = await response.json();
            setData(value)
        }
        async function fetchSmartphoneData() {
            const response = await fetch('https://dummyjson.com/products/category/smartphones')
            const value = await response.json()
            setSmartPhoneData(value.products)

        }
        async function fetchLaptopData() {
            const response = await fetch('https://dummyjson.com/products/category/laptops')
            const value = await response.json()
            setLaptoptData(value.products)

        }
        async function fetchGroceriesData() {
            const response = await fetch('https://dummyjson.com/products/category/groceries')
            const value = await response.json()
            setGroceriesData(value.products)

        }

        fetchCategoryData();
        fetchSmartphoneData();
        fetchLaptopData();
        fetchGroceriesData();
    }, [])


    const handleClick = (id: number) => {
        router.push(`/Products/${id}`)
    }
    return (
        <div className="flex gap-[20px]">
            <div>
                <h1 className=" text-xl font-semibold ">All categories</h1>
                <div className="flex flex-col gap-[10px]">
                    {data.map((item) => (
                        <div key={item.slug} className=" cursor-pointer">
                            {item.slug}
                        </div>
                    ))}
                </div>
            </div>
            <div  className="flex-grow">
                <h1 className="ml-[20px] font-[700] text[26px] leading-[30px] my-[20px]">Smart Phones</h1>
                <div className=" grid grid-cols-4">
                    {
                        smartphoneData?.slice(0, 4).map((product) => (
                            <div onClick={() => handleClick(product.id)}
                                className=" flex flex-col justify-center items-center gap-[10px] cursor-pointer"
                                key={product.id}>
                                <div className="w-[350px] h-[350px]">
                                    <Image src={product.images[0]} alt=""
                                    className="w-full h-full  object-contain" width={300} height={300} />
                                </div>
                                <div>
                                    <Rating name="halfefau-rating-read" value={product.rating}
                                        precision={0.1} readOnly />
                                    <h1 className="font-[600]">{product.title}</h1>
                                    < p className="text-[30px] font-[700] text-[#47b0f5] ">
                                        $ {product.price}
                                    </p>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <h1 className="ml-[20px] font-[700] text[26px] leading-[30px] my-[20px]">Laptop</h1>
                <div className=" grid grid-cols-4">
                    {
                        laptoptData?.slice(0, 4).map((product) => (
                            <div onClick={() => handleClick(product.id)}
                                className=" flex flex-col justify-center items-center gap-[10px] cursor-pointer"
                                key={product.id}>
                                <div className="w-[350px] h-[300px] max-w-[300px] max-h-[300px]">
                                    <Image src={product.images[0]} alt="" className="w-full h-full" width={300} height={300} />
                                </div>
                                <div>
                                <Rating name="halfefau-rating-read" value={product.rating}
                                        precision={0.1} readOnly />
                                    <h1 className="font-[600]">{product.title}</h1>
                                    < p className="text-[30px] font-[700] text-[#47b0f5] ">
                                        $ {product.price}
                                    </p>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <h1 className="ml-[20px] font-[700] text[26px] leading-[30px] my-[20px]">Groceries</h1>
                <div className=" grid grid-cols-4">
                    {
                        groceriesData?.slice(0, 4).map((product) => (
                            <div onClick={() => handleClick(product.id)}
                                className=" flex flex-col justify-center items-center gap-[10px] cursor-pointer"
                                key={product.id}>
                                <div className="w-[350px] h-[300px] max-w-[300px] max-h-[300px]">
                                    <Image src={product.images[0]} alt="" className="w-full h-full" width={300} height={300} />
                                </div>
                                <div>
                                <Rating name="halfefau-rating-read" value={product.rating}
                                        precision={0.1} readOnly />
                                    <h1 className="font-[600]">{product.title}</h1>
                                    < p className="text-[30px] font-[700] text-[#47b0f5] ">
                                        $ {product.price}
                                    </p>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AllCategory