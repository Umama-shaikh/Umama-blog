import React from "react";

export default function AboutPage() {
  return (
    <div className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-3xl xs:text-3xl lg:text-4xl font-bold text-dark dark:text-light">
          About Us
        </h1>
        <p className="text-base md:text-xl font-semibold text-slate-600 mt-4">
          Learn more about our blog and the team behind it.
        </p>
      </header>

      {/* Content Section */}
      <section className="text-lg leading-normal mt-4 space-y-6 px-2 lg:px-10 py-5 lg:text-center font-normal text-slate-800 lg:w-[1000px] lg:mx-auto bg-white shadow-md rounded-lg">
        <div className="flex flex-col items-center">
          <img
            src="/images/hero-image.png"
            alt="About Us"
            className="w-full max-w-md rounded-md shadow-md mb-6"
          />
        </div>

        <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
        <p>
          Our mission is to provide high-quality content that helps developers
          learn and grow. We cover a wide range of topics, including web
          development, programming languages, frameworks, and best practices.
        </p>

        <h2 className="text-2xl font-bold text-slate-800">About the Author</h2>
        <p>
          Hi, I'm Umama, the creator of this blog. With over 1 years
          of experience in the tech industry, I aim to share my knowledge and
          insights with fellow developers. I believe in continuous learning and
          strive to keep up with the latest trends and technologies.
        </p>

        <h2 className="text-2xl font-bold text-slate-800">Contact Us</h2>
        <p>
          If you have any questions, suggestions, or feedback, feel free to
          reach out to us at <span className="underline text-blue-600 cursor-pointer">email@example.com</span>. We'd love to hear from you!
        </p>
      </section>

      {/* Team Section */}
      <section className="text-lg leading-normal mt-4 space-y-6 px-2 lg:px-10 py-5 lg:text-center font-normal text-slate-800 lg:w-[1000px] lg:mx-auto bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-slate-800">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full max-w-xs text-center">
            <img
              src="/images/media (1).jpg"
              alt="Team Member 1"
              className="w-full rounded-full shadow-md mb-4"
            />
            <h3 className="text-xl font-bold text-slate-800">Team Member 1</h3>
            <p className="text-base text-slate-600">Role/Position</p>
          </div>
          <div className="w-full max-w-xs text-center">
            <img
              src="/images/media (2).jpg"
              alt="Team Member 2"
              className="w-full rounded-full shadow-md mb-4"
            />
            <h3 className="text-xl font-bold text-slate-800">Team Member 2</h3>
            <p className="text-base text-slate-600">Role/Position</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
}