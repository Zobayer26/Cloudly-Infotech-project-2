'use client'

import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"
import Banner from "./Banner";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';



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
    const [isOpen, setIsOpen] = useState(false)
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


    const handleClick: any = (id: number) => {
        router.push(`/Products/${id}`)
    }
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    }
    return (
        <div className="flex gap-[20px]">
            <div className=" hidden md:flex flex-col gap-4 px-2">
                <h1 className=" text-xl font-semibold mt-[20px]">All categories</h1>
                <div className="flex flex-col gap-[10px]">
                    {data.map((item) => (
                        <div key={item.slug} className=" cursor-pointer">
                            {item.slug}
                        </div>
                    ))}
                </div>
            </div>
            <div className=" mt-5 md:hidden">
                <Button onClick={toggleDrawer(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" width="24" height="24">
                        <path d="M2 6h20v2H2zm0 5h20v2H2zm0 5h20v2H2z" />
                    </svg>
                </Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <div className=" w-[400px] bg-[#1b6392]  text-white px-[40px] py-10">
                        <h1 className=" capitalize">All category</h1>
                        <div className="px-5 py-3 flex flex-col gap-[10px]">
                            {data.map((item) => (
                                <div key={item.slug} className=" px-3 py-2  rounded-md  transition-all duration-300
                                 hover:bg-[#383838] hover:shadow-md cursor-pointer">
                                    {item.slug}
                                </div>
                            ))}
                        </div>
                    </div>
                </Drawer>

            </div>
            <div className="flex-grow">
                <h1 className="ml-[20px] font-[700] text[26px] leading-[30px]
                 my-[20px]">Smart Phones</h1>
                <div className=" grid grid-cols-1 md:grid-cols-4">
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
                <Banner />
                <h1 className="ml-[20px] font-[700] text[26px] leading-[30px] my-[20px]">Laptop</h1>
                <div className=" grid grid-cols-1 md:grid-cols-4">
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
                <div className=" grid grid-cols-1 md:grid-cols-4">
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