import React from "react";
import Img from "../../../assets/Women3.jpg";
import Data from "./TeamData";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <>
      <div className="mt-8 overflow-hidden relative pb-4">
        <div className="container">
          <div className="flex flex-col-reverse items-center sm:flex-row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="w-full mt-8 md:mt-0 mr-0 sm:mr-12 sm:w-9/12"
            >
              <h6>Our Special Team</h6>
              <h1 className="my-4">Meet Our Team</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore dicta dolore officiis eos ipsa magni iusto minus
                repudiandae fugit recusandae, pariatur incidunt modi earum id
                nostrum aliquid animi necessitatibus vel!
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img src={Img} alt="Img One" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Data.map(({ img, alt, name, job }, i) => {
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      className="lg:h-[55vh] transition-all duration-1000 hover:scale-110"
                      src={img}
                      alt={alt}
                    />
                  </div>
                  <div className="relative w-full text-center py-2 bg-second-color text-main-color">
                    <h3 className="font-bold text-xl">{name}</h3>
                    <h3>{job}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
