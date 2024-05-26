import Image from "next/image"


const Banner = () => {
    return (
        <div className="w-full flex gap-[10px] max-w-[88%]  px-10 py-5 my-[20px]  items-center mx-auto max-[300px] bg-[#ffe7d6]">
            <div className="w-1/2 flex flex-col gap-[30px]">
                <h1 className=" text-[44px] font-[600] leading-[50px]">
                    Mackbook Pro
                </h1>
                <p className=" text-[26px] font-[500]">
                    Apple MI Max Chip 32GB unified Memory 1TB SSD Storage
                </p>
                <div>
                    <button className="  flex  items-center px-5 py-3 gap-[5px] text-white bg-[#fa8232]">
                        <p className=" uppercase">shop Now</p>
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0
         45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-1/2 flex justify-end">
                <Image
                    src={"https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png"}
                    alt="" width={300} height={300} objectFit="cover" />
            </div>
        </div>
    )
}

export default Banner