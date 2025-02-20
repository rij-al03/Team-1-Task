// import image for background
import heroImage from "../assets/bg-img.png";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 ">
      {/* section for hero */}
      <section
        id="home"
        className="hero py-20 flex flex-col items-center md:flex-row gap-8">
        {/* hero image */}
        <div className="hero-image w-full items-center mx-auto md:w-1/2">
          <img src={heroImage} alt="bg-image" />
        </div>
        {/* Hero text */}
        <div className="hero-text w-full text-center">
          <h1 className="text-3xl font-bold mb-4">
            Wellcome to <span className="text-blue-500">Our Website</span>
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            tempore tempora, quam, eligendi iusto sunt, architecto ad ipsa atque
            consectetur quisquam! Error fuga aspernatur repellat adipisci cum
            eaque velit dicta. Eius quae soluta perferendis, consequuntur
            doloremque aspernatur. Qui iste ducimus sapiente aliquam molestias.
            Illum itaque recusandae dolorum dolor quisquam repudiandae explicabo
            cum aliquid, ipsum quas culpa obcaecati reprehenderit ex possimus?
            Molestias, veniam consectetur explicabo quidem architecto, corporis
            dignissimos repellendus sed incidunt excepturi cum debitis dolores
            pariatur laudantium temporibus! Officiis ducimus, corporis fugit
            alias neque minus in quis voluptatum facilis odit.
          </p>
        </div>
      </section>

      {/* About Section  */}
      <section id="about" className="py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            fuga deserunt aperiam laboriosam labore quidem eos, laudantium
            consequuntur vel facere in ducimus, perferendis odio nemo. Magnam
            amet architecto velit eveniet.
          </p>
        </div>
      </section>

      {/* Services Section  */}
      <section id="services" className="py-16 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-gray-100 align-center rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700">
                Web Development
              </h3>
              <p className="text-gray-700 mt-2">
                We create high-performance websites with modern technologies.
              </p>
            </div>
            <div className="p-6 bg-gray-100 align-center rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700">
                UI/UX Design
              </h3>
              <p className="text-gray-700 mt-2">
                We design intuitive and user-friendly interfaces for better
                experiences.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700">
                SEO Optimization
              </h3>
              <p className="text-gray-700 mt-2">
                We optimize your website to rank higher and perform better on
                search engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section  */}
      <section id="projects" className="py-16 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700">Project 1</h3>
              <p className="text-gray-700 mt-2">
                A modern e-commerce website with a seamless shopping experience.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700">Project 2</h3>
              <p className="text-gray-700 mt-2">
                A portfolio website to showcase creative work with elegance.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700">Project 3</h3>
              <p className="text-gray-700 mt-2">
                A business website designed to enhance customer engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
