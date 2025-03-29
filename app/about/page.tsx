'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-playfair text-5xl md:text-6xl text-gray-800 mb-6">
            Our Story
          </h1>
          <p className="font-poppins text-xl text-gray-600">
            Located in the heart of Kathmandu, near Basuki Party Palace
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl text-gray-800 mb-6">
                Our Journey
              </h2>
              <p className="font-poppins text-gray-600 mb-6">
                Founded in 2020, our crochet shop has been a labor of love, bringing handmade warmth and beauty to homes across Nepal. What started as a small passion project has grown into a beloved destination for those seeking unique, handcrafted pieces.
              </p>
              <p className="font-poppins text-gray-600 mb-6">
                Each piece in our collection tells a story - of dedication, creativity, and the joy of creating something beautiful with one's own hands. We believe in the power of handmade items to bring comfort and style to your home.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-rose-500 text-2xl mr-3">•</span>
                  <p className="font-poppins text-gray-600">100% Handmade with Love</p>
                </div>
                <div className="flex items-start">
                  <span className="text-rose-500 text-2xl mr-3">•</span>
                  <p className="font-poppins text-gray-600">Premium Quality Materials</p>
                </div>
                <div className="flex items-start">
                  <span className="text-rose-500 text-2xl mr-3">•</span>
                  <p className="font-poppins text-gray-600">Custom Orders Available</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/photos/IMG_20240903_224017.jpg"
                alt="Our Shop"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-gray-800 mb-4">
              Visit Us
            </h2>
            <p className="font-poppins text-gray-600">
              Located near Basuki Party Palace, Kathmandu
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="font-playfair text-2xl text-gray-800 mb-4">
                Location Details
              </h3>
              <div className="space-y-4">
                <p className="font-poppins text-gray-600">
                  <span className="font-semibold">Address:</span> Near Basuki Party Palace, Kathmandu
                </p>
                <p className="font-poppins text-gray-600">
                  <span className="font-semibold">Hours:</span> Monday - Saturday: 10:00 AM - 7:00 PM
                </p>
                <p className="font-poppins text-gray-600">
                  <span className="font-semibold">Contact:</span> +977 1234567890
                </p>
                <a 
                  href="mailto:ashmitabhattarai@gmail.com"
                  className="font-poppins text-rose-500 hover:text-rose-600 transition-colors"
                >
                  ashmitabhattarai@gmail.com
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[400px] rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.866970040807!2d85.31559361506272!3d27.708376982768432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa1cd1%3A0x971b10f7b0c0c0c0!2sBasuki%20Party%20Palace!5e0!3m2!1sen!2snp!4v1648640000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-gray-800 mb-4">
              Meet the Artist
            </h2>
            <p className="font-poppins text-gray-600">
              The creative mind behind every piece
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto"
          >
            <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/photos/IMG_20240903_224017.jpg"
                alt="Artist"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-playfair text-2xl text-gray-800 mb-2 text-center">
              Ashmita Bhattarai
            </h3>
            <p className="font-poppins text-gray-600 text-center mb-4">
              Master Crochet Artist
            </p>
            <p className="font-poppins text-gray-600 text-center">
              With over 5 years of experience in crochet artistry, Ashmita brings her passion and creativity to every piece she creates. Her dedication to quality and attention to detail has made her work highly sought after in the Kathmandu area.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 