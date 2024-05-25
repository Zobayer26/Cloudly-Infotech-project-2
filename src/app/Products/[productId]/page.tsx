import ProductDetails from "@/components/ProductDetails"

const page = ({ params }: { params: { productId: number } }) => {


  return (
    <div>
     <ProductDetails productId={params.productId} />
    </div>
  )
}

export default page