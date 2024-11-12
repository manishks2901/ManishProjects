

const IntroPage = () => {
  return (
    <div className="flex flex-wrap py-5">
      <div className="flex md:order-1 order-1 md:w-2/3 font-semibold justify-start font-mono items-center">
        <h2 className="md:text-9xl text-5xl">Full-Stack</h2>
      </div>
      <div className="flex md:order-2 order-4 md:w-1/3 justify-center items-center">
      </div>
      <div className="flex md:order-3 order-3 md:w-1/3 justify-center items-center mt-4">
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
          accusamus dignissimos corporis minus unde consequuntur consequatur
          facere aliquid vel praesentium?
        </h2>
      </div>
      <div className="flex md:order-4 order-2 md:w-2/3 font-semibold justify-end font-mono" >
        <h2 className="md:text-9xl text-5xl">Developer</h2>
      </div>
    </div>
  );
};

export default IntroPage;
