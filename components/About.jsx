import React from "react";
import Image from "next/image";
import mine2 from "../public/mine2.jpg";
import min3 from "../public/min3.png";

const About = () => {
  return (
    <div>
      <div class="mt-8 flex justify-center items-center">
        <p class="text-gray-900 inline border-b-4 border-cyan-600 hover:text-cyan-600 uppercase text-4xl font-bold mb-4">
          ALL ABOUT ME
        </p>
      </div>

      <section className=" relative w-full min-h-screen md:h-screen flex md:block flex:col justify-center items-center">
        <section className="flex justify-center items-center p-20  ">
          <div class="container flex flex-col  mx-auto mt-10 md:px-12 md:flex-row justify-center items-center">
            <div class="mb-14 lg:mb-0 lg:w-1/2 text-center ">
              <p class="  text-lg max-w-2xl text-center text-gray-900 lg:text-left lg:max-w-md ">
                I'm Sheikh Arbaz Alam, a passionate UI/UX designer and Front End
                Developer with a strong foundation in design principles and a
                commitment to delivering exceptional digital experiences.
                Throughout my internships and training experiences, I've had the
                opportunity to immerse myself in the world of user-centered
                design, honing my skills in user research, information
                architecture, and interactive prototyping. I believe that
                thoughtful design has the power to transform user interactions,
                and I'm dedicated to creating intuitive and visually compelling
                solutions. Let's collaborate to bring your visions to life with
                creativity, functionality, and impact.
                <br />
                <span>
                  Advancements in technology set the course, and society adapts.
                  The push for greater inclusivity and diversity in the
                  industry, achieved through improved representation, holds
                  significant meaning for me.
                </span>
              </p>
              <div class="flex justify-center mt-14 lg:justify-start">
                <button
                  type="button"
                  class="text-white bg-cyan-600 font-medium rounded-lg text-md px-5 py-4 text-center hover:bg-indigo-700 hover:drop-shadow-md transition duration-300 ease-in-out"
                >
                  See more
                </button>
              </div>
            </div>
            <div class=" shadow-sm     lg:w-1/2  order-first md:order-none p-6">
              <Image src={min3} alt="" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
