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
    // <div
    //   className="w-100 overflow-hidden"
    //   style={{ height: fill ? "100%" : "200px" }}
    // >
    
    //   <img
    //     src={product.image}
    //     alt={product.title}
    //     onLoad={() => setIsLoading(false)}
    //     className={`custom-img ${isLoading ? "loading" : "loaded"}`}
    //   />
    // </div>
    <div
      className="w-100 overflow-hidden d-flex align-items-center justify-content-center"
      style={{ height: fill ? "100%" : "200px" }}
    >
      <img
        src={product.image}
        alt={product.title}
        onLoad={() => setIsLoading(false)}
        style={{
          width: "100%",
          height: "100%",
          // contain - rasm kesilmaydi, to'liq ko'rinadi. 
          // Agar shunga qaramay to'liq ko'rinishini xohlasangiz 'contain' qoldiring, 
          // agar ekranlarni to'ldirsin desangiz 'cover' qilasiz.
          objectFit: "contain", 
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
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
