import paymentImg from '../../assets/card_img.png'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Swal from "sweetalert2";
import { useState } from "react";
import { usePlaceOrderMutation } from "../../redux/features/addToCart/placeOrder";
import { ImSpinner9 } from "react-icons/im";
import { clearCart } from "../../redux/features/addToCart/cartSlice";
import './payment.css'
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
        text: "Some products in your cart may no longer be available",
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
          <h1 className=" text-5xl text-[#75ef71] mt-5">Checkout</h1>
        </div>
      </div>

      <div className="py-20 bg-[#EEEDEB]">
        <div
          className="w-[80%] md:w-[40%] mx-auto bg-orange-100 rounded shadow flex flex-col justify-between p-3"
          id="login"
        >
          <form onSubmit={handlePlaceOrder}>
            <fieldset className="border-4  p-5">
             

              <div className="container">
                <form action="">
                  <div className="row">
                    <div className="col">
                      <h3 className="title">billing address</h3>

                      <div className="inputBox">
                        <span>full name :</span>
                        <input
                          type="text"
                          placeholder="john deo"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="inputBox">
                        <span>email :</span>
                        <input
                          type="email"
                          placeholder="example@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="inputBox">
                        <span>address :</span>
                        <input
                          type="text"
                          placeholder="room - street - locality"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div className="inputBox">
                        <span>city :</span>
                        <input type="text" placeholder="mumbai" />
                      </div>

                      <div className="flex">
                        <div className="inputBox">
                          <span>state :</span>
                          <input type="text" placeholder="india" />
                        </div>
                        <div className="inputBox">
                          <span>zip code :</span>
                          <input type="text" placeholder="123 456" />
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <h3 className="title">payment</h3>

                      <div className="inputBox">
                        <span>cards accepted :</span>
                        <img src={paymentImg} alt="" />
                      </div>
                      <div className="inputBox">
                        <span>name on card :</span>
                        <input
                          type="text"
                          placeholder="mr. john deo"
                          value={name}
                        />
                      </div>
                      <div className="inputBox">
                        <span>credit card number :</span>
                        <input
                          type="number"
                          placeholder="1111-2222-3333-4444"
                        />
                      </div>
                      <div className="inputBox">
                        <span>exp month :</span>
                        <input type="text" placeholder="january" />
                      </div>

                      <div className="flex">
                        <div className="inputBox">
                          <span>exp year :</span>
                          <input type="number" placeholder="2022" />
                        </div>
                        <div className="inputBox">
                          <span>CVV :</span>
                          <input type="text" placeholder="1234" />
                        </div>
                      </div>
                    </div>
                  </div>

             
                </form>
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="w-full rounded  bg-gradient-to-r from-orange-600 to-orange-300 text-white p-2 text-center font-bold hover:bg-[#1A5319]"
              >
                {isLoading ? (
                  <div className="flex justify-center items-center gap-4">
                    <ImSpinner9 className="animate-spin text-[20px]" />
                    Placing Your Order
                  </div>
                ) : (
                  "Placing Your Order"
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
