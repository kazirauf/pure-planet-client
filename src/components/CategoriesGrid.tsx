
import { Link } from "react-router-dom";

const CategoriesGrid = () => {
  return (
    <div className="flex  justify-center">
      <div className="bg-[#EEEDEB] dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl dark:text-white">
                <span className="text-[#75ef71]">Categories</span>
              </h2>
            </div>
          </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-12">

        <div className="w-[500px]">
           <Link to={`/category/Fruit Bearing Trees`}>
           <img className="w-[500px] rounded border-2 border-lime-600" src="https://images.unsplash.com/photo-1532359975264-2e7e02441bd9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></Link>
            <h1 className="flex justify-end relative bottom-10 text-xl text-white font-bold right-4">Orchard Trees</h1>
          </div>
        <div className="w-[500px]">
           <Link   to={`/category/Flower Trees`}>
           <img className="w-[500px] rounded border-2 border-lime-600" src="https://images.unsplash.com/photo-1586470981461-ef0f28ad1c5c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></Link>
            <h1 className="flex justify-end relative bottom-10 text-xl text-white font-bold right-4">Flower Trees</h1>
          </div>
        <div className="w-[500px]">
           <Link   to={`/category/Indoor Plants`}>
           <img className="w-[500px] rounded border-2 border-lime-600" src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=2091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></Link>
            <h1 className="flex justify-end relative bottom-10 text-xl text-white font-bold right-4">Indoor Trees</h1>
          </div>
        <div className="w-[500px]">
           <Link    to={`/category/Outdoor Trees`}>
           <img className="w-[500px] rounded border-2 border-lime-600" src="https://plus.unsplash.com/premium_photo-1667126447968-f02d4cb36114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></Link>
            <h1 className="flex justify-end relative bottom-10 text-xl text-white font-bold right-4">Outdoor  Trees</h1>
          </div>
        </div>
 

        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
