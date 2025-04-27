import React from "react";
import { Link } from "react-router-dom";
import categories  from "../data/categories"; // Assume you have a categories array
import NavBar from "../components/NavBar";
import ProductSlider from "../components/ProductSlider";
import Footer from "../components/Footer";
const carouselContent = [
  {
    image: "https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/085/Gaming_for_Good_2025_-_Main1.jpg",
    title: "Explore the Latest Gaming",
    subtitle: "Perfect Gaming Tools For Great Experience"
  },
  {
    image: "https://bernardmarr.com/wp-content/uploads/2024/12/AdobeStock_556468321-scaled.jpeg",
    title: "Smart Home Devices",
    subtitle: "Upgrade your home with smart devices"
  },
  {
    image: "/images/banner-3.jpg",
    title: "Smart Home Essentials",
    subtitle: "Make your home smarter with our picks"
  }
];
export default function CategoriesPage() {
  return (
    <div className="bg-background text-textPrimary min-h-screen">

      <NavBar />

      <section className="my-10">
        <ProductSlider content={carouselContent} />
      </section>

      <section className="container">
        <h1 className="text-3xl font-bold mb-6 text-primary">All Categories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <Link
            key={cat.id}
              to={`${cat.name}`}
              className="bg-white rounded-2xl shadow hover:shadow-lg p-6 flex items-center justify-center text-center border border-borderColor transition"
              >
              <span className="font-medium text-textPrimary text-lg">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-10 mt-10">
        <Footer />
      </footer>
    </div>
  );
}
