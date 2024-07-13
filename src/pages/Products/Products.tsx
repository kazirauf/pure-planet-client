
import { Button, Input } from "@material-tailwind/react";
import { IoSearchSharp } from "react-icons/io5";
import {
  useCheckAvailabilityOfProductMutation,
  useGetAllProductsQuery,
} from "../../redux/features/product/getAllProducts";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useAppDispatch } from "../../redux/hooks";
import Swal from "sweetalert2";
import { addToCart, cartCount } from "../../redux/features/addToCart/cartSlice";

const Products = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [priceOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: allProducts, isLoading } = useGetAllProductsQuery({
    page: currentPage,
    limit: 6,
    category,
    sortBy,
    search,
    priceOrder,
  });

  const [currentProductId, setCurrentProductId] = useState<string | null>(null);

  const [checkIfAvailable, { isLoading: isCheckingLoading }] =
    useCheckAvailabilityOfProductMutation({});

  if (isLoading) {
    return <Loader />;
  }

  const totalPage = Math.ceil(allProducts?.data?.total / 6);
  const pages = [...new Array(totalPage).fill(0)];

  const handlePagination = (page: number) => {
    setCurrentPage(page + 1);
    window.scrollTo(0, 200);
  };

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
        title: `${item.title} is added to your cart list.`,
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
    <div className="bg-[#EEEDEB]">
     
        <div className="h-full w-full flex items-center justify-center ">
          <h1 className="text-[#75ef71] text-5xl mt-5">All Products</h1>
        </div>
    

      <div className="py-20">
        <div className="max-w-screen-xl mx-auto mb-7 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="outline-none px-7 py-2 md:py-0 rounded-lg bg-lime-100 border border-[#9ed74d]"
          >
            <option value="" disabled>
              Sort By Name and Price
            </option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none px-7 py-2 md:py-0 rounded-lg bg-lime-100 border border-[#9ed74d]"
          >
            <option value="" disabled>
              Filter By Category
            </option>
            <option value="Fruit Bearing Trees">Orchard Trees</option>
            <option value="Flower Trees">Flower Trees</option>
            <option value="Indoor Plants">Indoor Plants</option>
            <option value="Outdoor Trees">Outdoor Trees</option>
          </select>

          <form onSubmit={(e) => e.preventDefault()}>
            <Input
              color="green"
              label="Search Your Product"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={<IoSearchSharp size={"20"} className="font-bold" />}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </form>
        </div>

        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          {allProducts.data.data.map((item: any, index: number) => (
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
          ))}
        </div>

        {/* Pagination */}
        <div
          className={`flex items-center justify-center gap-3 w-[80%] mx-auto mt-10`}
        >
          <Button
            variant="text"
           
            className="hidden md:flex lg:flex items-center gap-2 text-lg capitalize "
            onClick={() => {
              setCurrentPage(currentPage - 1);
              window.scrollTo(0, 200);
            }}
            disabled={currentPage === 1}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <GrFormPreviousLink size={"30"} />
            Previous
          </Button>

          {pages.map((_item, index) => (
            <button
              key={index}
             
              className={` btn bg-gradient-to-r from-lime-800 to-green-800 text-white px-3 py-1 font-bold text-[12px] md:text-[18px] lg:text-[18px] hover:bg-[#2121211a] rounded-lg ${
                currentPage === index + 1
                  ? "bg-[#508D4E] text-white rounded-lg hover:!bg-[#1A5319]"
                  : "bg-transparent"
              }`}
              onClick={() => handlePagination(index)}
            >
              {index + 1}
            </button>
          ))}
          <Button
            variant="text"
            className="hidden md:flex lg:flex items-center gap-2 text-lg capitalize"
            onClick={() => {
              setCurrentPage(currentPage + 1);
              window.scrollTo(0, 200);
            }}
            disabled={currentPage === totalPage}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Next
            <GrFormNextLink size={"30"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
