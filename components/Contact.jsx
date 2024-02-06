import React from "react";

const Contact = () => {
  return (
    <div>
      <footer className="  text-center lg:text-left  text-gray-600">
        <div>
          <div className="mt-8 -mb-8 flex justify-center items-center">
            <p className="text-gray-900 inline border-b-4 border-cyan-600 hover:text-cyan-600 uppercase text-4xl font-bold mb-4">
              Contact
            </p>
          </div>
          <section className="flex justify-center items-center p-10  ">
            <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
              <div className="mb-14 lg:mb-0 lg:w-1/2">
                <div
                  name="contact"
                  classNameName="w-full   left-0 top-0 flex flex-col justify-center items-center p-4"
                >
                  <form
                    method="POST"
                    action="https://getform.io/f/c95e71cc-1676-4499-b192-1a041e74c299"
                    className="flex flex-col max-w-[600px] w-full min-w-[300px]"
                  >
                    <input
                      className="bg-[#ccd6f6] p-2 border-2 border-gray-900 rounded-md"
                      type="text"
                      placeholder="Name"
                      name="name"
                    />
                    <input
                      className="bg-[#ccd6f6] p-2 border-2 border-gray-900 rounded-md"
                      type="text"
                      placeholder="Email"
                      name="name"
                    />
                    <textarea
                      className="bg-[#ccd6f6] p-2 border-2 border-gray-900 rounded-md"
                      name="message"
                      rows="10"
                      placeholder="Message"
                    ></textarea>
                    <button className="text-black text:hover-white-800 border-2 bg-cyan-500 hover:bg-teal-600 hover:border-gray-600 px-4 py-3 my-8 mx-auto flex items-center">
                      {"Let's Collaborate"}
                    </button>
                  </form>
                </div>
              </div>
              <div className="  pl-10 md:w-1/2 text-center order-first md:order-none ">
                <p className="  text-pretty font-bold text-lg max-w-2xl text-center text-gray-900 lg:text-left lg:max-w-[600] ">
                  For inquiries about my work, projects, or to discuss
                  opportunities in the realm of UI/UX design and front-end
                  development, feel free to reach out.
                </p>
                <br></br>
                <p className="text-pretty font-bold text-lg max-w-2xl text-center text-gray-900 lg:text-left lg:max-w-[600] ">
                  {` I'm always open to connect, whether it's over a virtual coffee
                  or through a thoughtful conversation.`}
                  <span>
                    {" "}
                    <br></br>
                    Drop your comments, questions, or collaboration ideas, and I
                    appreciate you taking the time to explore my profile!
                  </span>
                </p>
                <div className="pb-8">
                  <p classNameName="text-gray-900 py-4 text-4xl center-bold">
                    Do I have your attention? Hit me up :)
                  </p>

                  <p className="text-gray-900 py-4">
                    Submit the form or shoot me an email -
                    sheikharbazalam@gmail.com.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mr-12 hidden lg:block">
            <span className="text-cyan-500">
              Get Connected with Me on social networks:
            </span>
          </div>

          <div className="flex justify-center mb-6 ">
            <a
              href="https://dribbble.com/thespoof4"
              type="button"
              className="rounded-full border-2 border-gray-900 text-black leading-normal uppercase hover:bg-teal-200  focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-5 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/sheikh-arbaz-alam-6b6b46172/"
              type="button"
              className="rounded-full border-2 border-gray-900 text-black leading-normal uppercase hover:bg-teal-200  focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                className="h-full w-5 mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>

            <a
              href="https://github.com/thespoof-source"
              type="button"
              className="rounded-full border-2 border-gray-900 text-black leading-normal uppercase hover:bg-teal-200  focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                className="h-full w-5 mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center p-6 bg-gray-200">
          <span> © 2021 Copyright </span>
          <a
            className="text-gray-600 font-semibold"
            href="https://tailwind-elements.com/"
          >
            SHEIKH
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
