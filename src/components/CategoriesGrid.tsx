import indoorPlants from "../assets/indoor-plants.jpg";
import outdoorPlants from "../assets/outdoor-tree.jpeg";
import fruitPlants from "../assets/fruit-tree.jpg";
import flowerPlants from "../assets/flowering-tree.webp";
import { Link } from "react-router-dom";

const CategoriesGrid = () => {
  return (
    <div>
      <div className="bg-[#EEEDEB] dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl dark:text-white">
                <span className="text-[#75ef71]">Categories</span>
              </h2>
            </div>
          </div>
          <div>
            
          </div>
          {/* <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
          <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
    className="w-96"
      src="https://images.unsplash.com/photo-1532359975264-2e7e02441bd9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Orchard Trees</h2>

    <div className="card-actions justify-end">
    <Link
   className="btn bg-gradient-to-r from-lime-800 to-green-800 text-white"
              to={`/category/Fruit Bearing Trees`} >See All Orchard Trees</Link>
    </div>
  </div>
</div>
          <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
    className="w-96"
      src="https://images.unsplash.com/photo-1532359975264-2e7e02441bd9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Orchard Trees</h2>

    <div className="card-actions justify-end">
    <Link
   className="btn bg-gradient-to-r from-lime-800 to-green-800 text-white"
              to={`/category/Fruit Bearing Trees`} >See All Orchard Trees</Link>
    </div>
  </div>
</div>
          <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
    className="w-96"
      src="https://images.unsplash.com/photo-1532359975264-2e7e02441bd9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Orchard Trees</h2>

    <div className="card-actions justify-end">
    <Link
   className="btn bg-gradient-to-r from-lime-800 to-green-800 text-white"
              to={`/category/Fruit Bearing Trees`} >See All Orchard Trees</Link>
    </div>
  </div>
</div>
          <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
    className="w-96"
      src="https://images.unsplash.com/photo-1532359975264-2e7e02441bd9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Orchard Trees</h2>

    <div className="card-actions justify-end">
    <Link
   className="btn bg-gradient-to-r from-lime-800 to-green-800 text-white"
              to={`/category/Fruit Bearing Trees`} >See All Orchard Trees</Link>
    </div>
  </div>
</div>
          </div> */}
{/* 
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <Link
              to={`/category/Indoor Plants`}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src={indoorPlants}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative bg-[#508D4E] p-2 rounded-lg ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Indoor Plants
              </span>
            </Link>

            <Link
              to={`/category/Outdoor Trees`}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src={outdoorPlants}
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 bg-[#508D4E] p-2 rounded-lg mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Outdoor Trees
              </span>
            </Link>

            <Link
              to={`/category/Fruit Bearing Trees`}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src={fruitPlants}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 bg-[#508D4E] p-2 rounded-lg mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Fruit-Bearing Trees
              </span>
            </Link>

            <Link
              to={`/category/Flower Trees`}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
        <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
