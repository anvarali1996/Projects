import { FC, useState } from "react"
import "./custom-image.css" // import the css file

export interface ProductType {
  id: number
  title: string
  image: string
}

interface Props {
  product: ProductType
  fill?: boolean
}

const CustomImage: FC<Props> = ({ product, fill }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div
      className="w-100 overflow-hidden"
      style={{ height: fill ? "100%" : "200px" }}
    >
      <img
        src={product.image}
        alt={product.title}
        onLoad={() => setIsLoading(false)}
        className={`custom-img ${isLoading ? "loading" : "loaded"}`}
      />
    </div>
  )
}

export default CustomImage

// import  { FC, useState } from "react"
// import "./custom-image.css"

// export interface ProductType {
//   id: number
//   title: string
//   image: string
// }

// interface Props {
//   product: ProductType
//   fill?: boolean
// }

// const CustomImage: FC<Props> = ({ product, fill }) => {
//   const [isLoading, setIsLoading] = useState(true)

//   return (
//     <div
//       className="w-100 overflow-hidden d-flex justify-content-center align-items-center bg-light"
//       style={{ height: fill ? "100%" : "200px" }}
//     >
//       {isLoading && (
//         <div
//           className="placeholder-glow w-100 h-100"
//           style={{ background: "#e9ecef" }} // Bootstrap gray-200
//         />
//       )}
//       <img
//         src={product.image}
//         alt={product.title}
//         onLoad={() => setIsLoading(false)}
//         className={`custom-img ${isLoading ? "d-none" : "d-block"}`}
//       />
//     </div>
//   )
// }

// export default CustomImage
