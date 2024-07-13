/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import bannerBg from "../../assets/product-page-banner-bg.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {
  useCheckAvailabilityOfProductMutation,
  useGetAllProductsByCategoryQuery,
} from "../../redux/features/product/getAllProducts";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart, cartCount } from "../../redux/features/addToCart/cartSlice";

const BrowseByCategory = () => {
  const dispatch = useAppDispatch();

  const { categoryName } = useParams();

  const { data, isLoading } = useGetAllProductsByCategoryQuery(categoryName);

  const [currentProductId, setCurrentProductId] = useState<string | null>(null);

  const [checkIfAvailable, { isLoading: isCheckingLoading }] =
    useCheckAvailabilityOfProductMutation({});

  if (isLoading) {
    return <Loader />;
  }

  const handleAddToCart = async (item: any) => {
    setCurrentProductId(item._id);
    const result = await checkIfAvailable(item._id);

    if (result.error) {
      Swal.fire({
        title: "This product has been stocked out!!",
        text: "",
        icon: "error",
      });
      setCurrentProductId(null);

      return;
    }

    try {
      dispatch(cartCount(item._id));
      dispatch(addToCart(item));
      Swal.fire({
        icon: "success",
        title: `${item.title} has been added to your cart.`,
        text: ``,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You've can't add this product to cart more than it's available quantity!",
      });
    }
  };

  return (
    <div>
      <div
     
      >
        <div className="h-full w-full flex items-center justify-center ">
          <h1 className="text-orange-600 font-bold mt-10 text-5xl">{categoryName}</h1>
        </div>
      </div>

      <section className="py-20 bg-[#EEEDEB]">
        <div
          className={`mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3`}
        >
          {data.data.data.length === 0 ? (
            <div className="text-center text-5xl text-lime-500  w-full">No Data Found</div>
          ) : (
            data.data.data.map((item: any, index: number) => (
              <div key={index} className="w-full max-w-sm bg-white border3 border-lime-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="h-60 rounded-t-lg flex justify-center " src={item.image} alt="product image" />
              </a>
              <div className="px-5 pb-5 mt-4">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg className="w-4 h-4 text-lime-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-lime-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-lime-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-lime-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-lime-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-blue-800 ms-3">{item.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {item.price}</span>
                 
                </div>
                <div className="flex justify-between items-center mt-5">
                <button
                    disabled={isCheckingLoading && item._id === currentProductId}
                    onClick={() => handleAddToCart(item)}
                   className="btn bg-gradient-to-r from-orange-600 to-orange-300 text-white"
                  >
                    {isCheckingLoading && item._id === currentProductId ? (
                      <div className="flex justify-center items-center gap-4">
                        Please Wait
                      </div>
                    ) : (
                      "Add to cart"
                    )}
                  </button>
                  <Link
                  className="btn bg-gradient-to-r from-orange-600 to-orange-300 text-white"
                  to={`/product/details/${item._id}`}
                >
                  See details
                </Link>
                </div>
               
              </div>
            </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default BrowseByCategory;
