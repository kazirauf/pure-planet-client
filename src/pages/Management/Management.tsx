/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@material-tailwind/react";

import update from "../../assets/icons8-edit.gif";
import delet from "../../assets/Animation - 1720876273691.gif"

import { SetStateAction, useState } from "react";
import UpdateModal from "../../components/Modals/UpdateModal";
import AddProductModal from "../../components/Modals/AddProductModal";
import { useGetAllProductsQuery } from "../../redux/features/product/getAllProducts";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";
import { useDeleteProductMutation } from "../../redux/features/product/deleteProduct";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const Management = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading: isProductsLoading } = useGetAllProductsQuery({
    page: currentPage,
    limit: 6,
  });

  const [deleteProduct] = useDeleteProductMutation();

  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState("");

  const handleUpdateModalOpen = (item: SetStateAction<string>) => {
    setOpenUpdateModal(!openUpdateModal);
    setProductToUpdate(item);
  };

  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const handleAddProductModal = () =>
    setOpenAddProductModal(!openAddProductModal);

  const handleDeleteProduct = async (item: { _id: any; title: string }) => {
    Swal.fire({
      title: `Are you sure you want to delete ${item.title}?`,
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteProduct(item._id);

        Swal.fire({
          title: "Product is deleted",
          text: "",
          icon: "success",
        });
      }
    });
  };

  if (isProductsLoading) {
    return <Loader />;
  }

  const totalPage = Math.ceil(data?.data?.total / 6);
  const pages = [...new Array(totalPage).fill(0)];

  const handlePagination = (page: number) => {
    setCurrentPage(page + 1);
    window.scrollTo(0, 200);
  };

  return (
    <div>
    <h1 className="text-[#75ef71] text-5xl mt-5 text-center">Management</h1>

      <section className="flex flex-col justify-center antialiased bg-[#EEEDEB] text-gray-600 py-20">
        <div className="h-full">
          <div className="w-[90%] mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-xl text-orange-700">
               Manage The Products 
              </h2>

              <Button
                onClick={handleAddProductModal}
                size="md"
                className="btn bg-gradient-to-r from-orange-600 to-orange-300 text-white p-3 font-bold"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
          
                <span>Add A New Product</span>
              </Button>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
    <div>
      <button
        id="dropdownActionButton"
        data-dropdown-toggle="dropdownAction"
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
      >
        <span className="sr-only">Action button</span>
        Action
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdownAction"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownActionButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Reward
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Promote
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Activate account
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Delete User
          </a>
        </div>
      </div>
    </div>
    <label htmlFor="table-search" className="sr-only">
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        id="table-search-users"
        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search for users"
      />
    </div>
  </div>
  <table className="table-auto w-full">
    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
      <tr>
        <th className="p-2 whitespace-nowrap">
          <div className="text-center text-green-300 text-[13px]">Image</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="text-center text-green-300 text-[13px]">Title</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="text-center text-green-300 text-[13px]">Price</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="text-center text-green-300 text-[13px]">Category</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="text-center text-green-300 text-[13px]">Quantity</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="text-center text-green-300 text-[13px]">Rating</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="text-center text-green-300 text-[13px]">Action</div>
        </th>
      </tr>
    </thead>
    <tbody className="text-sm divide-y divide-gray-100">
      {data.data.data.length === 0
        ? null
        : data.data.data.map((item:any, index:number) => (
            <tr key={index}>
              <td className="p-2 whitespace-nowrap">
                <div className="flex items-center justify-center">
                  <div className="">
                    <img
                      className="rounded-full size-16"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center text-[15px] text-orange-600">
                  {item.title}
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center font-medium text-[15px] text-orange-600">
                  ${item.price}
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center text-[15px] text-orange-600">
                  {item.category}
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center text-[15px] text-orange-600">
                  {item.quantity}
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center text-[15px] text-orange-600">
                  {item.rating}
                </div>
              </td>
              <td className="p-2 flex justify-center items-center gap-3">
                <Button
                
                  onClick={() => handleUpdateModalOpen(item)}
                  size="sm"
                  className="capitalize bg-white"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <img className="w-12" src={update} alt="" />
                 <h2 className="text-base text-lime-600">Update</h2>
                </Button>
                <Button
                  onClick={() => handleDeleteProduct(item)}
                  size="sm"
                  className="capitalize bg-white"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
              <img className="w-16" src={delet} alt="" />
              <h2 className="text-red-600 text-base">Delete</h2>
                </Button>
              </td>
            </tr>
          ))}
    </tbody>
  </table>
</div>

                <div
                  className={`flex items-center justify-center gap-3 w-[80%] mx-auto mt-10`}
                >
                  <Button
                    variant="text"
                    className="hidden md:flex lg:flex items-center gap-2 text-lg capitalize"
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
                      className={`  px-3 py-1 font-bold text-[12px] md:text-[18px] lg:text-[18px] hover:bg-[#2121211a] rounded-lg ${
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

                <UpdateModal
                  open={openUpdateModal}
                  handleOpen={handleUpdateModalOpen}
                  productToUpdate={productToUpdate}
                />

                <AddProductModal
                  open={openAddProductModal}
                  handleOpen={handleAddProductModal}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;
