// import React, { useEffect, useState } from "react";
// import sanityClient from "@sanity/client";
// import Image from "next/image";


// const sanity = sanityClient({
//   projectId: "zqx6rzrj",
//   dataset: "production",
//   apiVersion: "2023-01-01",
//   useCdn: true,
// });

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   imageUrl: string;
//   productImage: {
//     assest: {
//       _ref: string;
//     };
//   };
//   tags: string[];
// }

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);

//   const fetchProducts = async () => {
//     try {
//       const query = `
//             *[type == "product"] {
//             _id,
//             title,
//             price,
//             description,
//             discountPercentage,
//             "imageUrl": productImage.assest->url,
//             tags

//             }`;

//       const data = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error("ErrorFetching Products:", error);
//     }
//   };

//   const addToCard = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.title} has been added to your cart`);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   function truncateDescription(
//     description: string
//   ): React.ReactNode | Iterable<React.ReactNode> {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-center text-slate-800 mt-4 mb-4">
//         Products From API's Data
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-md rounded-lg p-4  hover:shadow-lg transaition-shadow duration-300"
//           >
//             <Image
//               src={product.imageUrl}
//               alt="image"
//               width={300}
//               height={300}
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <div className="mt-4">
//               <h2 className="text-lg font-semibold">{product.title}</h2>
//               <p text-slate-800 mt-2 text-sm>
//                 {truncateDescription(product.description)}
//               </p>
//               <div className="flex justify-between mt-4 items-center">
//                 <div>
//                   <p className="text-slate-600 font-bold">{product.price}</p>
//                   {product.discountPercentage > 0 && (
//                     <p className="text-sm text-green-500 ">
//                       {product.discountPercentage}% OFF
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-2 flex flex-wrap gap-2">
//                 {product.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="bg-gray-200 rounded-full px-2 py-1 text-xs text-gray-800"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               {/* Add to Card */}
//                 <button
//                       className="bg-blue-800 text-white px-4 py-2 rounded-md mt-4 w-full hover:bg-blue-700"
//                         onClick={() => addToCard(product)}>
//                         Add to Cart
//                       </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Card */}
//       <div className="mt-8 bg-slate-600 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-black text-red-800">Card Summary</h2>
//         {cart.length > 0 ? (
//             <ul className="space-y-4 ">
//                 {cart.map((item, index) => (
//                     <li key={index} className="flex justify-between items-center bg-white p-4 rounded-md shadow-md">
//                         <div>
//                            <p className="font-medium text-slate-900">{item.title}</p>
//                            <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>

//                         </div>
//                         <Image src={item.imageUrl} alt={item.title} width={50} height={50} className="rounded-md"/>
                 
//                     </li>
//                 ))}

//             </ul>
//         ) : (
//             <p className="text-black-200 text-center">No items in your cart</p>
//         )}

//       </div>
//     </div>
//   );
// };
// export default ProductCards;