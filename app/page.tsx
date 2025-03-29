'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "Elegant Crochet Tote Bag",
    price: 2000,
    description: "Handcrafted with soft, durable yarn in a beautiful pattern",
    image: "/photos/IMG_20240903_224017.jpg",
    features: ["100% Handmade", "Premium Yarn", "Perfect for Daily Use"]
  },
  {
    id: 2,
    name: "Bohemian Crochet Shoulder Bag",
    price: 1800,
    description: "Stylish shoulder bag with unique crochet pattern",
    image: "/photos/IMG_20240903_223903.jpg",
    features: ["Intricate Design", "Adjustable Strap", "Room for Essentials"]
  },
  {
    id: 3,
    name: "Modern Crochet Clutch",
    price: 1500,
    description: "Contemporary design perfect for special occasions",
    image: "/photos/IMG20240903222921_00.jpg",
    features: ["Compact Size", "Elegant Pattern", "Perfect for Events"]
  },
  {
    id: 4,
    name: "Classic Crochet Market Bag",
    price: 1600,
    description: "Spacious and sturdy, ideal for shopping",
    image: "/photos/IMG_20240903_224017.jpg",
    features: ["Large Capacity", "Strong Material", "Eco-Friendly"]
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function Home() {
  const scrollToCollection = () => {
    const element = document.getElementById('featured-collection');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-rose-50 to-pink-50 opacity-90"
        />
        <motion.div 
          animate={floatAnimation}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[url('/photos/IMG_20240903_224017.jpg')] bg-cover bg-center opacity-10" />
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-6xl md:text-8xl text-gray-800 mb-6"
          >
            Handcrafted Crochet Bags
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-poppins text-xl md:text-2xl text-gray-600 mb-8"
          >
            Unique handmade bags that combine style and functionality
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCollection}
            className="btn-primary text-lg"
          >
            View Collection
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-800 mb-8">
            About Our Bags
          </h2>
          <p className="font-poppins text-gray-600 leading-relaxed text-lg mb-8">
            Each bag in our collection is lovingly handcrafted with attention to detail and quality materials. 
            We specialize in creating unique crochet bags that are both beautiful and practical, perfect for 
            everyday use or special occasions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-rose-50 rounded-xl"
            >
              <h3 className="font-playfair text-xl mb-4">Handmade with Care</h3>
              <p className="font-poppins text-gray-600">Every bag is unique and crafted with attention to detail</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-rose-50 rounded-xl"
            >
              <h3 className="font-playfair text-xl mb-4">Quality Materials</h3>
              <p className="font-poppins text-gray-600">Using only the finest yarns for lasting durability</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-rose-50 rounded-xl"
            >
              <h3 className="font-playfair text-xl mb-4">Custom Orders</h3>
              <p className="font-poppins text-gray-600">Personalized bags made just for you</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="featured-collection" className="py-20 px-4 bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-center text-gray-800 mb-12">
            Featured Collection
          </h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {products.map((product, index) => (
              <motion.div 
                key={product.id} 
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="card group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="font-poppins text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <ul className="mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="font-poppins text-sm text-gray-500 flex items-center mb-1">
                        <span className="text-rose-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="font-poppins text-lg font-semibold text-rose-500">
                      ₹{product.price}
                    </span>
                    <a 
                      href="mailto:ashmitabhattarai@gmail.com?subject=Inquiry about Crochet Bag"
                      className="btn-primary text-sm"
                    >
                      Email for Details
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-800 mb-6">
            Interested in a Custom Bag?
          </h2>
          <p className="font-poppins text-gray-600 text-lg mb-8">
            Email us about your requirements and we'll create a unique bag just for you!
          </p>
          <a 
            href="mailto:ashmitabhattarai@gmail.com?subject=Custom Crochet Bag Inquiry"
            className="btn-primary text-lg inline-block"
          >
            Email Your Requirements
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-xl mb-4">About Us</h3>
              <p className="font-poppins text-gray-400">
                Handcrafted crochet pieces made with love and attention to detail.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl mb-4">Quick Links</h3>
              <ul className="font-poppins text-gray-400 space-y-2">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="mailto:ashmitabhattarai@gmail.com?subject=Custom Order Inquiry" className="hover:text-white transition-colors">Custom Orders</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-xl mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/ashmita_crochet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="https://www.facebook.com/ashmita.crochet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="https://www.pinterest.com/ashmitacrochet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Pinterest
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="font-poppins">© 2024 Handmade Crochet Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
