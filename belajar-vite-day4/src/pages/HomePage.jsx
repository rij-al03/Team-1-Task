const HomePage = () => {
  return (
    <div className="container mx-auto px-4 ">
      <section className="hero py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="hero-image w-full md:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/successful-happy-business-team_53876-74892.jpg?t=st=1739867139~exp=1739870739~hmac=917d43689123953e650f61fbc006d62a8a860d61388b875e2e932d9af4f36855&w=1380"
            alt="dsads"
          />
        </div>
        <div className="hero-text w-full text-centermd:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">
            Wellcome to <span className="text-green-400">Our Website</span>
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odio
            sed ullam, provident amet culpa earum aperiam reprehenderit omnis
            sequi nisi corrupti harum hic vero dolores ratione maiores id
            suscipit?
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
