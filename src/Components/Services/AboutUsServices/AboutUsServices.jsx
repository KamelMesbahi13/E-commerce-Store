import React from "react";
import Img from "../../../assets/Back3.jpg";
import { AiOutlineCheck } from "react-icons/ai";
import { motion } from "framer-motion";

const AboutUsServices = () => {
  return (
    <>
      <div className="overflow-hidden mt-16">
        <div className="flex flex-col items-center md:flex-row-reverse">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="md:mx-28 md:w-[75%] mb-8 sm:mb-0"
            >
              <h6>Don't Miss The Chance..</h6>
              <h1 className="my-4">Discount On Your Dream Clothes</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                doloribus suscipit aperiam voluptates
              </p>
              <div className="relative left-8 mt-8">
                <div className="relative before:absolute before:h-full before:w-1 before:-left-8 before:bg-third-color">
                  <p className="font-bold mb-4 italic">
                    As One Of The World's Largest It Service Provides, Our Deep
                    Pool Of Over 130 Certified Sales Man.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque, nisi commodi. Necessitatibus, similique iure.
                  </p>
                </div>
              </div>
              <a href="#">
                <button>See More</button>
              </a>
              <div>
                <div className="flex items-center mt-8">
                  <i className="mr-2 text-2xl">
                    <AiOutlineCheck className="text-third-color" />
                  </i>{" "}
                  <p>We Are Committed To Providing Quality Service</p>
                </div>
                <div className="flex items-center my-4">
                  <i className="mr-2 text-2xl">
                    <AiOutlineCheck className="text-third-color" />
                  </i>{" "}
                  <p>We Are Committed To Providing Quality Service</p>
                </div>
                <div className="flex items-center">
                  <i className="mr-2 text-2xl">
                    <AiOutlineCheck className="text-third-color" />
                  </i>{" "}
                  <p>We Are Committed To Providing Quality Service</p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-4 md:mt-0 md:w-1/2 relative"
          >
            <img
              className="mt-4 md:mt-0 h-[55vh] sm:h-full"
              src={Img}
              alt="Img"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutUsServices;
