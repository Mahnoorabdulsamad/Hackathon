import React,{useEffect,useState} from "react"
import sanityClient from "@sanity/client";
import Image from "next/image";


const sanity = sanityClient({
    projectId: "zqx6rzrj",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true,

});

interface Product{
    _id:string;
    title:string;
    price:number;
    description:string;
    discountPercentage:number;
    imageUrl:string;
    productImage:{
        assest:{
            _ref:string;
        };
    };
    tags: string[];
}

const ProductCards: React.FC = () => {
    const [products,setProducts] =  useState<Product[]>([]);
    const [cart,setCart] =  useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const query = `
            *[type == "product"] {
            _id,
            title,
            price,
            description,
            discountPercentage,
            "imageUrl": productImage.assest->url,
            tags

            }`;

            const data = await sanity.fetch(query);
            setProducts(data);

        } catch(error) {
            console.error("ErrorFetching Products:", error)
        }
    };



      const addToCard = (product:Product) => {
        setCart((prevCart) => [...prevCart,product]);
        alert(`${product.title} has been added to your cart`);

      };
      
     useEffect(() => {
        fetchProducts();
     },[]);

     return(
        <div className="p-4">
            <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API's Data</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product._id} 
                    className="bg-white shadow-md rounded-lg p-4  hover:shadow-lg transaition-shadow duration-300">

                    </div>
                ))}

            </div>


        </div>


     )





}