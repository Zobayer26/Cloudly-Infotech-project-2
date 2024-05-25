

const Footer = () => {
    return (
        <footer className="  bg-[#1b6392]">
            <div className="py-[30px] mx-auto w-[500px]">
                <h1 className="text-[36px] text-center text-white">subscribe to our newsletter</h1>
                <p className=" text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Nam dolore ipsa excepturi eaque praesentium, consequatur iure, illum 
                </p>
                <div className=" bg-white p-2 flex  gap-[10px]">
                    <input
                        placeholder="Enter email"
                        type="text"
                        className=" flex-grow px-4 py-1 outline-none"
                    />
                    <button className=" px-2 text-white bg-[#fa8232] flex items-center gap-[5px] capitalize">
                        <p>subscribe</p>
                        <div className="w-4 h-4">
                            <svg className="w-full h-full"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0
                             45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer