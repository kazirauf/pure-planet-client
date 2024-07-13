import { Radio } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Swal from "sweetalert2";
import { useState } from "react";
import { usePlaceOrderMutation } from "../../redux/features/addToCart/placeOrder";
import { ImSpinner9 } from "react-icons/im";
import { clearCart } from "../../redux/features/addToCart/cartSlice";

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [placeOrder, { isLoading }] = usePlaceOrderMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handlePlaceOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (subtotal === 0) {
      Swal.fire({
        title: "Your cart is empty!!",
        text: "",
        icon: "warning",
      });

      return;
    }

    const payload = {
      customerName: name,
      customerEmail: email,
      customerPhone: phoneNumber,
      customerAddress: address,
      orderItems: cartItems,
    };

    const result = await placeOrder(payload);

    if (result.error) {
      Swal.fire({
        title: "Opps..!!",
        text: "One or more product in your cart may have been stocked out..!!",
        icon: "warning",
      });

      return;
    }

    Swal.fire({
      title: "Order placed Successfully!!",
      text: "",
      icon: "success",
    });

    dispatch(clearCart());
  };

  return (
    <div>
      <div
       
      >
        <div className="h-full w-full flex items-center justify-center">
          <h1 className=" text-5xl text-orange-700 mt-5">Checkout</h1>
        </div>
      </div>

      <div className="py-20 bg-orange-100]">
        <div
          className="w-[80%] md:w-[40%] mx-auto bg-orange-100 rounded shadow flex flex-col justify-between p-3"
          id="login"
        >
          <form onSubmit={handlePlaceOrder}>
            <fieldset className="  p-5">
             

              <label className="font-bold text-lg text-gray-700">Name</label>
              <input
                required
                type="text"
                className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#508D4E]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="font-bold text-lg text-gray-700">Email</label>
              <input
                required
                type="email"
                className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#508D4E]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="font-bold text-lg text-gray-700">
                Phone Number
              </label>
              <input
                required
                type="number"
                className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#508D4E]"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <label className="font-bold text-lg text-gray-700">Address</label>
              <input
                required
                type="text"
                className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#508D4E]"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <div className="flex flex-col hidden">
                <label className="font-bold text-lg text-gray-700">
                  Payment Option
                </label>
                <Radio
                  checked
                  name="type"
                  color="green"
                  label={`Cash On Delivery (Pay $ ${subtotal} )`}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="w-full rounded mt-4 bg-gradient-to-r from-orange-600 to-orange-300 text-white  p-2 text-center font-bold hover:bg-[#1A5319]"
              >
                {isLoading ? (
                  <div className="flex justify-center items-center gap-4">
                    <ImSpinner9 className="animate-spin text-[20px]" />
                    Placing Order
                  </div>
                ) : (
                  "Place Order"
                )}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
