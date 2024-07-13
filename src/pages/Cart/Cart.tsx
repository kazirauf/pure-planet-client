/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import bannerBg from "../../assets/product-page-banner-bg.jpg";
import { useAppSelector } from "../../redux/hooks";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div
       
      >
        <div className="h-full w-full flex items-center justify-center">
          <h1 className=" text-5xl text-[#75ef71] mt-10">Your Cart List</h1>
        </div>
      </div>

      <div className="bg-[#EEEDEB] py-20">
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          {cartItems.length === 0 ? (
            <div className="text-5xl font-bold py-10 text-orange-700">
              You don't have any cart
            </div>
          ) : (
            <div className="rounded-lg  grid lg:grid-cols-2 gap-20 mr-20 grid-cols-1">
              {cartItems.map((item, index) => (
               <div className="card bg-base-100 w-80 shadow-xl">
               <figure>
                 <img
                   src={item.image}
                   alt="Shoes" />
               </figure>
               <div className="card-body">
                 <h2 className="card-title">
                {item.title}
                
                 </h2>
                 <h2 className="card-title text-orange-700">
             $   {item.price}
                
                 </h2>
               
                 <div className="card-actions justify-end">
                   <div className="badge badge-outline">Category: {item.category}</div>
                   <div className="badge badge-outline">QTY: {item.quantity}</div>
                 </div>
               </div>
             </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="mt-6 h-full rounded-lg border bg-orange-200 p-6 shadow-md md:mt-0 md:w-1/3" >
              

              <hr className="my-4" />
              <div className="flex justify-between ">
                <p className="text-lg text-gray-800 font-bold">Total Cost</p>
                <div className="">
                  <p className="mb-1 text-lg text-gray-800 font-bold">
                    $ {subtotal}
                  </p>
                </div>
              </div>
              <Link
                to={"/checkout"}
                className="block text-center mt-6 w-full rounded-md bg-gradient-to-r from-orange-600 to-orange-300 text-white  py-1.5 font-bold text-lg text-white hover:bg-[#1A5319]"
              >
                Check out
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
