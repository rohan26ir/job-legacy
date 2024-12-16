import React from "react";
import { easeOut, motion } from "framer-motion";
import happyTeam1 from '../../assets/happy-team-1.webp' 
import happyTeam2 from '../../assets/happy-team-2.webp' 

const Banner = () => {
  return (
    <div>
      <div>
        <div className="hero bg-base-200 min-h-96">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex-1 gap-2 space-y-2">
              <div>
                <motion.img 
                animate={{y: [0, 50, 0]}}
                transition={{duration: 10, repeat: Infinity}}
                className="h-52  rounded-t-3xl rounded-br-3xl shadow  border-l-4 border-b-4 border-blue-800"
                src={happyTeam1}
                alt="" />
              </div>
              <div>
                <motion.img 
                animate={{x: [50, 150, 50]}}
                transition={{duration: 10, repeat: Infinity}}
                className="h-44  rounded-t-3xl rounded-br-3xl shadow  border-l-4 border-b-4 border-blue-800"
                src={happyTeam2}
                alt="" />
              </div>
              
            </div>
            <div className="flex-1">
              
              <motion.h1 
              animate={{x: [10, 100, 10], color: ['#3C65F5']}}
              transition={{duration: 10, delay: 1, ease: easeOut, repeat: Infinity}}
              className="text-5xl font-bold">Latest Job  
              <motion.span
              animate={{color: ["#C70039", "#FF5733", "#22cedf"]}}
              transition={{duration: 1.5, repeat: Infinity}}
              className="ml-2"
              > for You!</motion.span> </motion.h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
