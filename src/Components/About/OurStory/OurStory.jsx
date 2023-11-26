import React from "react";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div className="container">
          <div className="flex flex-col text-center md:flex-row md:justify-between md:text-left items-center">
            <div className="mb-8 md:mb-0">
              <h1 className="text-5xl sm:text-6xl">Our Story</h1>
              <h5 className="text-second-color text-xl">Why We Started It</h5>
            </div>
            <div className="md:w-[70%] mt-12 md:mt-16">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                exercitationem esse expedita aspernatur incidunt ratione
                voluptatum sunt. Veniam nostrum minus, odio molestiae sunt
                temporibus repudiandae ducimus praesentium mollitia tempora,
                magnam necessitatibus itaque quo deserunt doloribus placeat enim
                fugiat quam at perspiciatis unde corporis veritatis voluptate.
                Placeat enim, vitae dolore dolores atque libero odio? Possimus
                mollitia quibusdam totam, expedita nulla minus numquam hic
                quidem, dolor, facere dolores harum dicta atque eaque distinctio
                aspernatur <br /> <br /> Officia, a eius porro suscipit non
                corrupti ipsam odio, cupiditate laudantium sapiente asperiores
                voluptates nihil? Tempora quae temporibus voluptates sapiente
                voluptatum, tenetur tempore porro ab est at quos. Quam
                voluptatem minus excepturi? Nulla recusandae facere laudantium
                eius quibusdam vero obcaecati ipsa, asperiores error
                reprehenderit dolor alias, molestiae repellendus ut tempora
                maiores temporibus? Esse, tenetur maiores nam eum maxime aut
                laboriosam exercitationem inventore, ipsa perspiciatis sint
                pariatur harum veritatis a ipsam quo cum nulla veniam aliquam
                repudiandae molestiae dignissimos.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OurStory;
