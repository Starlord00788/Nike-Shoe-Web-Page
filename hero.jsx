const Hero = () => {
  return (
   

    <>
    
    <main className="flex w-10/12 mx-auto h-96 my-16">
    <div className="pl-16 w-1/2">
    <h1 className="text-8xl font-poppins font-extrabold">YOUR FEET DESERVE <br /> THE BEST</h1>
    <p className="text-sm font-poppins pl-2 mt-5 font-medium">
      YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />HELP YOU WITH OUR
      SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
      SHOES.
    </p>  

    <div className="mt-4 ml-2">
        <button className="bg-red-600 text-white font-poppins px-3 py-1">Shop Now</button>
        <button className="border-2 border-black font-poppins px-3 py-1 ml-8" >Category</button>
    </div>

    <div className="mt-5 ml-2"><p className="text-sm">Also Available On</p>
    
      <div className="flex mt-2">

        <img src="public\flipkart.png" alt="Flipkart Logo" />
        <img className="ml-4" src="public\amazon.png" alt="Amazon Logo" />
        </div>
    </div>
    
    </div>


    <div className=" mt-14 py-3 pb-12">

        <img className="w-full" src="public\shoe_image.png" alt="Shoe Photo" />
    </div>
    </main>
    </>
      
        
      
    
  );
};
export default Hero;
