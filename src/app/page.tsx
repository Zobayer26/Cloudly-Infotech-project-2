'use client'
import AllCategory from "@/components/AllCategory"



const Home = () => {
  return (
    <div>
      <div className="px-[45px] py-[12px] bg-[#1b6392] ">
        <h1 className="text-white">Shop Home</h1>
      </div>
      <div className="px-[45px]">
        <AllCategory />
      </div>
    </div>
  )
}

export default Home

