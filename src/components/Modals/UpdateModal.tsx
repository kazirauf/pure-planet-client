/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dialog, Input, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useUpdateProductMutation } from "../../redux/features/product/updateProducts";
import { ImSpinner9 } from "react-icons/im";
import Swal from "sweetalert2";

const UpdateModal = ({ open, handleOpen, productToUpdate }: any) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const [formValues, setFormValues] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
    category: "default",
    quantity: "",
    rating: "default",
  });

  useEffect(() => {
    if (productToUpdate) {
      setFormValues({
        image: productToUpdate.image,
        title: productToUpdate.title,
        description: productToUpdate.description,
        price: productToUpdate.price,
        category: productToUpdate.category,
        quantity: productToUpdate.quantity,
        rating: productToUpdate.rating,
      });
    }
  }, [productToUpdate]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      image: formValues.image,
      title: formValues.title,
      description: formValues.description,
      price: parseInt(formValues.price),
      category: formValues.category,
      quantity: parseInt(formValues.quantity),
      rating: parseInt(formValues.rating),
    };

    const id = productToUpdate._id;

    await updateProduct({ id, payload });

    handleOpen();

    Swal.fire({
      title: "Product Updated Successfully!!",
      text: "",
      icon: "success",
    });
  };

  return (
    <div>
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-white text-2xl text-center font-semibold mb-6">
            Update details of {productToUpdate?.title}
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-white mb-1">Image</label>
              <Input
                className="w-full bg-gray-700 text-white border border-gray-600 rounded"
                name="image"
                defaultValue={formValues.image}
                onChange={handleChange}
                placeholder="Enter image URL" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}              />
            </div>

            <div>
              <label className="block text-white mb-1">Title</label>
              <Input
                className="w-full bg-gray-700 text-white border border-gray-600 rounded"
                name="title"
                defaultValue={formValues.title}
                onChange={handleChange}
                placeholder="Enter product title" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}              />
            </div>

            <div>
              <label className="block text-white mb-1">Description</label>
              <Textarea
                className="w-full bg-gray-700 text-white border border-gray-600 rounded"
                name="description"
                defaultValue={formValues.description}
                onChange={handleChange}
                placeholder="Enter product description" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              />
            </div>

            <div>
              <label className="block text-white mb-1">Price</label>
              <Input
                className="w-full bg-gray-700 text-white border border-gray-600 rounded"
                name="price"
                type="number"
                defaultValue={formValues.price}
                onChange={handleChange}
                placeholder="Enter product price" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}              />
            </div>

            <div>
              <label className="block text-white mb-1">Category</label>
              <select
                name="category"
                value={formValues.category}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded"
              >
                <option value="default" disabled>
                  Select a category
                </option>
                <option value="Indoor Plants">Indoor Plants</option>
                <option value="Outdoor Trees">Outdoor Trees</option>
                <option value="Fruit Bearing Trees">Fruit Bearing Trees</option>
                <option value="Flower Trees">Flower Trees</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-1">Quantity</label>
              <Input
                className="w-full bg-gray-700 text-white border border-gray-600 rounded"
                name="quantity"
                type="number"
                defaultValue={formValues.quantity}
                onChange={handleChange}
                placeholder="Enter product quantity" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}              />
            </div>

            <div>
              <label className="block text-white mb-1">Rating</label>
              <select
                name="rating"
                value={formValues.rating}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded"
              >
                <option value="default" disabled>
                  Ratings
                </option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-orange-300 text-white py-2 rounded mt-4"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex justify-center items-center gap-4">
                  <ImSpinner9 className="animate-spin text-[20px]" />
                  Updating Product
                </div>
              ) : (
                "Update Product"
              )}
            </Button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default UpdateModal;
