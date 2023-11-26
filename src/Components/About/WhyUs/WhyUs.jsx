import React from "react";
import Img from "../../../assets/Women14.jpg";
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <>
      <div className="overflow-hidden mt-28 bg-second-color text-main-color">
        <div className="flex flex-col items-center sm:flex-row">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="sm:w-[70%]"
            >
              <h6>Why Our Store</h6>
              <h1 className="my-4">Best Online Store In North Africa</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                doloribus suscipit aperiam voluptates ab assumenda, officiis,
                est nihil rerum inventore atque aspernatur iusto mollitia vel!
                Modi quidem adipisci architecto id.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <img
              className="mt-4 md:mt-0 h-[50vh] md:h-full"
              src={Img}
              alt="Img"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
