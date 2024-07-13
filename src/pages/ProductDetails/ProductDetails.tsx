/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import {
  useCheckAvailabilityOfProductMutation,
  useGetSingleProductQuery,
} from "../../redux/features/product/getAllProducts";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";
import { addToCart, cartCount } from "../../redux/features/addToCart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import './ProductDetails.css'
const ProductDetails = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id);

  const [checkIfAvailable, { isLoading: isCheckingLoading }] =
    useCheckAvailabilityOfProductMutation({});

  if (isLoading) {
    return <Loader />;
  }

  const handleAddToCart = async (item: any) => {
    const result = await checkIfAvailable(id);

    if (result.error) {
      Swal.fire({
        title: "This product has been stocked out!!",
        text: "",
        icon: "error",
      });

      return;
    }

    try {
      dispatch(cartCount(item._id));
      dispatch(addToCart(item));
      Swal.fire({
        icon: "success",
        title: `${data.data.title} is added in your cart list.`,
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
      <div className="container">
      <div className="product-image">
     
        <img src={data.data.image} alt=""  />
        <div className="dots">
          <a href="#!" className="active"><i>1</i></a>
          <a href="#!"><i>2</i></a>
          <a href="#!"><i>3</i></a>
          <a href="#!"><i>4</i></a>
        </div>
      </div>

      <div className="product-details">
        <header>
          <h1 className="title text-3xl">{data.data.title}</h1>
          <span className="colorCat">{data.data.category}</span>
          <div className="price">
            <span className="before text-xl">20%</span>
            <span className="current text-xl">${data.data.price}</span>
          </div>
          <div className="rate">
            <a href="#!" className="active text-xl">{data.data.rating}</a>
            <a href="#!" className="active text-xl">★</a>
            
          </div>
        </header>
        <article>
          <h5 className="text-xl">Description</h5>
          <p>{data.data.description}</p>
        </article>
        <div className="controls">
          <div className="color">
            <h5>color</h5>
            <ul>
              <li><a href="#!" className="colors color-bdot3"></a></li>
            </ul>
          </div>
      
          <div className="qty">
            <h5>qty</h5>
            <a href="#!" className="option">{data.data.quantity}</a>
          </div>
        </div>
        <div >
          <button onClick={handleAddToCart} type="button" className="btn bg-gradient-to-r from-lime-800 to-green-800 text-white">
            <img className="w-6" src="http://co0kie.github.io/codepen/nike-product-page/cart.png" alt="" />
            <span>add to cart</span>
          </button>
         
        </div>
      </div>
      
   
    </div>
    </div>
  );
};

export default ProductDetails;
