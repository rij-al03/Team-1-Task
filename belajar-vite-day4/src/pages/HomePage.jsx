// import image for background
import heroImage from "../assets/bg-img.png";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section
        id="home"
        className="hero py-20 flex flex-col items-center md:flex-row gap-8">
        <div className="hero-image w-full md:w-1/2">
          <img
            src={heroImage}
            alt="Transformasi Digital"
            className="rounded-full"
          />
        </div>
        <div className="hero-text w-full text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6">
            Mendorong{" "}
            <span className="text-blue-600">Transformasi Digital</span> Anda
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Kami mengkhususkan diri dalam menciptakan solusi digital inovatif
            yang mendorong pertumbuhan bisnis dan meningkatkan pengalaman
            pengguna. Tim ahli kami menyediakan pengembangan web mutakhir,
            desain menakjubkan, dan solusi SEO strategis yang disesuaikan dengan
            kebutuhan Anda.
          </p>
          <a
            href="#services"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Mulai Sekarang
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Tentang Perusahaan Kami</h2>
          <p className="mt-4 text-gray-700 text-lg">
            Dengan pengalaman lebih dari satu dekade di industri digital, kami
            telah membantu lebih dari 200 bisnis mengubah kehadiran online
            mereka. Tim kami berdedikasi untuk memberikan hasil luar biasa
            melalui solusi inovatif dan pemikiran strategis.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Layanan Kami</h2>
          <p className="text-gray-700 text-lg mb-12">
            Kami menawarkan berbagai layanan digital untuk membantu bisnis Anda
            tumbuh dan sukses di era digital.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Pengembangan Web
              </h3>
              <p className="text-gray-700">
                Kami membangun website berkinerja tinggi dengan teknologi
                terkini untuk bisnis Anda.
              </p>
            </div>
            <div className="p-6 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Desain UI/UX
              </h3>
              <p className="text-gray-700">
                Kami merancang antarmuka yang intuitif dan user-friendly untuk
                pengalaman pengguna yang lebih baik.
              </p>
            </div>
            <div className="p-6 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Optimasi SEO
              </h3>
              <p className="text-gray-700">
                Kami mengoptimalkan website Anda untuk peringkat lebih tinggi
                dan performa lebih baik di mesin pencari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Projek Kami</h2>
          <p className="text-gray-700 text-lg mb-12">
            Beberapa projek yang telah kami selesaikan untuk klien kami.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Website E-commerce
              </h3>
              <p className="text-gray-700">
                Platform belanja online modern dengan pengalaman pengguna yang
                mulus.
              </p>
            </div>
            <div className="p-6 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Portfolio Digital
              </h3>
              <p className="text-gray-700">
                Website portfolio untuk menampilkan karya kreatif dengan elegan.
              </p>
            </div>
            <div className="p-6 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Website Bisnis
              </h3>
              <p className="text-gray-700">
                Website perusahaan yang dirancang untuk meningkatkan
                keterlibatan pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
