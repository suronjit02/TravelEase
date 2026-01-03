import { Link } from "react-router";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
      <section>
        <h1 className="text-xl text-sky-900 font-semibold mb-4">
          About TravelEase
        </h1>
        <p className="text-secondary text-lg  text-justify leading-relaxed">
          TravelEase is your trusted platform for booking vehicles quickly,
          safely, and effortlessly. We connect travelers with the perfect rides
          for every journey. Our platform is designed to provide a seamless and
          convenient experience for all types of travelers, whether you are
          commuting to work, going on a family trip, or exploring new
          destinations. With TravelEase, you can browse a wide range of
          vehicles, choose the one that best fits your needs, and book instantly
          with confidence.Our mission is to empower travelers
          with a smart, transparent, and efficient booking system that saves
          time and enhances their travel experience. At TravelEase, we believe
          that safe and reliable transportation is essential for every
          adventure, business trip, or daily commute. By providing a curated
          selection of vehicles, verified drivers, and seamless booking
          processes, we aim to redefine the way people travel. <br /> <br />{" "}
          Whether it's a short ride across town or a long-distance journey,
          TravelEase ensures that each trip is comfortable, secure, and
          memorable. Join thousands of satisfied travelers who trust TravelEase
          to make their travel effortless, reliable, and enjoyable.
        </p>
      </section>

      <div className="flex gap-5">
        <section className="space-y-4">
          <h2 className="text-xl text-sky-900 font-semibold">Who We Are</h2>
          <p className="text-secondary text-lg text-justify leading-relaxed">
            At TravelEase, we are passionate about making travel simple and
            stress-free. Our platform provides a wide range of vehicles, from
            compact cars to luxury vans, catering to both personal and group
            journeys. We combine technology and customer-first service to
            deliver a seamless booking experience.
          </p>
        </section>
        <div className="w-2 bg-gray-400 h-50"></div>
        <section className="space-y-4">
          <h2 className="text-xl text-sky-900 font-semibold ">Our Mission</h2>
          <p className="text-secondary text-lg text-justify leading-relaxed">
            Our mission is to empower travelers to move freely and safely by
            providing reliable vehicles at transparent prices. We aim to reduce
            travel stress and make every journey enjoyable, whether for
            business, leisure, or daily commute.
          </p>
        </section>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl text-sky-900 font-semibold ">
          Why Choose TravelEase
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-secondary text-lg leading-relaxed">
          <li>✔ Verified vehicles with complete documentation</li>
          <li>✔ Transparent pricing with no hidden fees</li>
          <li>✔ Easy and fast booking process</li>
          <li>✔ 24/7 customer support for all travelers</li>
          <li>✔ Flexible options for short and long journeys</li>
          <li>✔ Safe and comfortable rides for every trip</li>
        </ul>
      </section>

      <section className="space-y-4 col-span-1">
        <h2 className="text-xl text-sky-900 font-semibold ">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-secondary text-lg leading-relaxed">
          <li>
            Browse our extensive catalog of vehicles and choose the one that
            fits your journey.
          </li>
          <li>Select the category, date, and time for your ride.</li>
          <li>
            Confirm your booking instantly and receive all necessary details.
          </li>
          <li>
            Enjoy a safe, comfortable, and convenient travel experience with
            TravelEase.
          </li>
        </ol>
      </section>

      <section className="space-y-4 col-span-1 bg-white/30 backdrop-blur-md p-5 text-center rounded-lg">
        <h2 className="text-xl text-sky-900 font-semibold ">Our Impact</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Since our inception, TravelEase has helped thousands of travelers
          reach their destinations safely and on time. We pride ourselves on
          delivering a reliable platform that combines convenience,
          transparency, and trust. Every trip booked through TravelEase
          contributes to smoother, safer, and more enjoyable travel experiences.
        </p>
      </section>

      <section className="text-center space-y-4">
        <h3 className="text-xl text-sky-900 font-semibold ">
          Ready to Start Your Journey?
        </h3>
        <p className="text-secondary text-lg">
          Book your next ride with TravelEase and enjoy a hassle-free travel
          experience.
        </p>
        <Link
          to={"/all-vehicles"}
          className="btn primary text-white font-semibold hover:text-white transition"
        >
          Browse Vehicles
        </Link>
      </section>
    </div>
  );
};

export default About;
