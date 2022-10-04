import Head from "next/head";

import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Talwind css first Portfolio JIBI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md-px-20 lg:px-40 dark:bg-gray-900 ">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex  justify-between">
            <h1 className=" text-cyan-400 text-6xl font-bold font-Roboto ">
              JIBI
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="  text-3xl py-2 font-bold font-Roboto text-teal-800 md:text-6xl">
              Ritesh Singh
            </h2>
            <h3 className=" md:text-3xl text-2xl py-2 font-Roboto text-gray-800">
              Web Developer & Designer
            </h3>
            <p className=" md:text-xl text-md py-5 leading-8 text-gray-800">
              You just tell us what data you need a report for, and we get our
              kids to create beautiful charts for you using only the finest
              crayons. You just tell us what data you need a report for, and we
              get our kids to create beautiful charts for you using only the
              finest crayons.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillFacebook />
            <AiFillLinkedin />
            <AiFillTwitterCircle />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto flex justify-center rounded-full mt-20 overflow-hidden md:h-90 md:w-96">
            <img
              className=" w-80 h-80 rounded-full object-cover"
              src="https://t4.ftcdn.net/jpg/04/62/56/93/240_F_462569353_LtpMXz0r22KFurq80smDxihrq3pmfCdf.jpg"
              layout="fill"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1"> Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              You just tell us what data you need a report for, and we get our
              kids to create beautiful charts for you using only the finest
              crayons. You just tell us what data you need a report for, and we
              get our kids to create beautiful charts for you using only the
              finest crayons<span className="text-teal-500">Agencies</span>
              Consulted for<span className="text-teal-500">Startup</span>
              You just tell us what data you need a report for, and we get our
              kids to create beautiful charts for you using only the finest
              crayons. You just tell us what data you need a report for, and we
              get our kids to create beautiful charts for you using only the
              finest crayons.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              You just tell us what data you need a report for, and we get our
              kids to create beautiful charts for you using only the finest
              crayons.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="object-contain justify-center  text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <img
                className="object-contain"
                src=" https://img.freepik.com/free-photo/abstract-3d-geometrical-squares-banner-3d-render-concept-illustration_460848-11293.jpg?size=626&ext=jpg&ga=GA1.2.1611377656.1663155443"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium drop-shadow">
                Beautiful Design
              </h3>
              <p className=" py-2 ">
                You just tell us what data you need a report for, and we get our
                kids to create beautiful charts for you using only the finest
                crayons.
              </p>
              <h4 className="py-4 text-teal-600">
                Designe Tools which I used to Make
              </h4>
              <p className="text-gray-800 py-1">Adobe Illustration</p>
              <p className="text-gray-800 py-1"> Adobe Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1"> Blender</p>
            </div>

            <div className="justify-center object-contain text-center  shadow-lg p-10 rounded-xl my-10">
              <img
                className="object-contain"
                src=" https://img.freepik.com/free-photo/telephone-button-accept-call-icon-realistic-mobile-symbol-communication-talk-incoming-3d-rendering_56104-1153.jpg?size=626&ext=jpg&ga=GA1.2.1611377656.1663155443"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
              <p className=" py-2 ">
                You just tell us what data you need a report for, and we get our
                kids to create beautiful charts for you using only the finest
                crayons.
              </p>
              <h4 className="py-4 text-teal-600">
                Designe Tools which I used to Make
              </h4>
              <p className="text-gray-800 py-1">Adobe Illustration</p>
              <p className="text-gray-800 py-1"> Adobe Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1"> Blender</p>
            </div>

            <div className="justify-center object-contain text-center  shadow-lg p-10 rounded-xl my-10">
              <img
                className="object-contain"
                src="https://img.freepik.com/free-photo/like-thumb-up-icon-good-sign-symbol-button-blue-speech-bubble-white-background-3d-rendering_56104-1193.jpg?size=338&ext=jpg&ga=GA1.2.1611377656.1663155443"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Design
              </h3>
              <p className=" py-2 ">
                You just tell us what data you need a report for, and we get our
                kids to create beautiful charts for you using only the finest
                crayons.
              </p>
              <h4 className="py-4 text-teal-600">
                Designe Tools which I used to Make
              </h4>
              <p className="text-gray-800 py-1">Adobe Illustration</p>
              <p className="text-gray-800 py-1"> Adobe Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1"> Blender</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              You just tell us what data you need a report for, and we get our
              kids to create beautiful charts for you using only the finest
              crayons. You just tell us what data you need a report for, and we
              get our kids to create beautiful charts for you using only the
              finest crayons<span className="text-teal-500">Agencies</span>
              Consulted for<span className="text-teal-500">Startup</span>
              You just tell us what data you need a report for, and we get our
              kids to create beautiful charts for you using only the finest
              crayons. You just tell us what data you need a report for, and we
              get our kids to create beautiful charts for you using only the
              finest crayons.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              You just tell us what data you need a report for, and we get our
              kids to create beautiful charts for you using only the finest
              crayons.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:glex-wrap">
            <div className="basis-1/2 flex-1">
              <img
                className="rounded-lg object-cover "
                src="https://img.freepik.com/premium-vector/web-development-application-design-illustration-pink-background_145666-1338.jpg?size=626&ext=jpg&ga=GA1.2.1611377656.1663155443"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>

            <div className="basis-1/2 flex-1">
              <img
                className="rounded-lg object-cover "
                src="https://img.freepik.com/free-vector/app-development-landing-page_52683-3101.jpg?size=626&ext=jpg&ga=GA1.2.1611377656.1663155443"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/2 flex-1">
              <img
                className="rounded-lg object-cover "
                src="https://img.freepik.com/free-vector/app-development-landing-page_52683-3101.jpg?size=626&ext=jpg&ga=GA1.2.1611377656.1663155443"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}