import React from "react";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <div className="bg-pink-200">
      {/* Section with cards showing resources */}
      <div class="text-center max-w-xl mx-auto">
        <h1 class="text-6xl md:text-7xl font-bold mb-5 text-pink-900 py-4">
          RESOURCES
        </h1>
        <h3 class="mb-3 font-light">
          Welcome to our world of resources, where warmth and support are always
          on the menu! 🌟 
          <br/>We're thrilled to provide you with a diverse range of
          valuable tools and guidance to make your journey smoother and
          brighter. Picture us as your friendly guides on this adventure,
          offering you a comforting hand along the way. 
          <br/>Our extensive resources
          cover a multitude of topics, from pregnancy to parenting, sexual
          health to family planning, adoption to counseling, and so much more.
        </h3>
        <div class="text-center mb-1">
          <span class="inline-block w-1 h-1 rounded-full bg-pink-900 ml-1"></span>
          <span class="inline-block w-3 h-1 rounded-full bg-pink-900 ml-1"></span>
          <span class="inline-block w-40 h-1 rounded-full bg-pink-900"></span>
          <span class="inline-block w-3 h-1 rounded-full bg-pink-900 ml-1"></span>
          <span class="inline-block w-1 h-1 rounded-full bg-pink-900 ml-1"></span>
        </div>
      </div>
      <div className="min-w-screen min-h-screen bg-pink-200 flex items-center justify-center py-5 ">
        <div class="w-full px-5 py-16 md:py-24">
          <div class="w-full max-w-6xl mx-auto">
            <div class="-mx-3 md:flex items-start">
              <div class="px-1 md:w-1/2">
                <div className="card w-96 bg-base-100 gap-4 mx-4 mb-4">
                  {/* card 1 */}
                  <div className="card w-96 bg-base-100 shadow">
                    <figure className="px-10 pt-10">
                      <img
                        src="preggirl.png"
                        alt="pregnancy journey"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center mt-3 border-t border-pink-900">
                      <h2 className="card-title text-xl text-pink-900">
                        Pregnancy Journey
                      </h2>
                      <p className="font-light">
                        Explore the entire pregnancy journey, beginning with
                        pregnancy testing and hospital checkups.
                        <br /> Learn about common symptoms, understand the
                        different trimesters, discover suitable dietary choices,
                        explore exercise options, and engage with our AI bot for
                        answers to any questions you might have.
                      </p>
                      <div className="card-actions">
                      <Link to="/pregnancy"> <button className="btn bg-pink-900 text-pink-200 rounded-full h-10 px-5 m-2 ">
                          See More
                        </button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="card w-96 bg-base-100 shadow">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=2000"
                      alt="hospitals"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center mt-3 border-t border-pink-900">
                    <h2 className="card-title text-xl text-pink-900">
                      Hospitals
                    </h2>
                    <p className="font-light">
                      Discover nearby hospitals providing maternal care services
                      and access their contact information for scheduling
                      appointments and arranging checkups.
                    </p>
                    <div className="card-actions">
                    <Link to="/hospitals"> <button className="btn bg-pink-900 text-pink-200 rounded-full h-10 px-5 m-2 ">
                          See More
                        </button></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div class="px-1 md:w-1/2">
                <div className="card w-96 bg-base-100 shadow">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2016_48/1816276/gettyimages-539594788.jpg"
                      alt="shelters"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center mt-3 border-t border-pink-900">
                    <h2 className="card-title text-xl text-pink-900">
                      Shelters
                    </h2>
                    <p className="font-light">
                      Locate shelters in your vicinity that provide care and
                      protection for teenage mothers who may require alternative
                      accommodations. Our platform facilitates contact with
                      these shelters, ensuring you can reach out to them in case
                      of emergencies.
                    </p>
                    <div className="card-actions">
                    <Link to="/shelters"> <button className="btn bg-pink-900 text-pink-200 rounded-full h-10 px-5 m-2 ">
                          See More
                        </button></Link>
                    </div>
                  </div>
                </div>
                {/* card4 */}
                <div className="card w-96 bg-base-100 shadow">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://img.freepik.com/free-vector/family-planning-abstract-illustration_335657-5257.jpg"
                      alt="family planning and sexual education"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center mt-3 border-t border-pink-900">
                    <h2 className="card-title text-xl text-pink-900">
                      Family Planning and Sexual Education
                    </h2>
                    <p className="font-light">
                      Gain valuable insights into your sexual health and
                      reproductive knowledge from experienced professionals.
                      Explore comprehensive information on family planning and
                      the various options available to empower yourself with
                      better preparation and knowledge.
                    </p>
                    <div className="card-actions">
                      <button className="btn bg-pink-900 text-pink-200 rounded-full h-10 px-5 m-2 ">
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 5 */}
              <div class="px-1 md:w-1/2">
                <div className="card w-96 bg-base-100 shadow">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://img.freepik.com/premium-vector/mom-with-kid-adoption_24911-68486.jpg?w=2000"
                      alt="Adoption"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center mt-3 border-t border-pink-900">
                    <h2 className="card-title text-xl text-pink-900">
                      Adoption Agencies
                    </h2>
                    <p className="font-light">
                      Discover the transformative journey of adoption, where
                      love creates families. Explore the process, support, and
                      stories that make adoption a beautiful choice. We also
                      offer connections to adoption agencies in situations where
                      you are unable to care for your child, ensuring a caring
                      and supportive path forward.
                    </p>
                    <div className="card-actions">
                      <button className="btn bg-pink-900 text-pink-200 rounded-full h-10 px-5 m-2 ">
                        See More
                      </button>
                    </div>
                  </div>
                </div>
                {/* card 6 */}
                <div className="card w-96 bg-base-100 shadow">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://counsellingskillsacademy.com/wp-content/uploads/2022/01/Two-people-talking-02-800-x-500-px.png"
                      alt="Counselling"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center mt-3 border-t border-pink-900">
                    <h2 className="card-title text-xl text-pink-900">
                      Counselling
                    </h2>
                    <p className="font-light">
                      Embark on a journey of healing and self-discovery through
                      our counseling services. We're here to provide unwavering
                      support throughout the entire process, connecting you with
                      compassionate professional counselors who can guide you
                      toward a brighter, more fulfilling future
                    </p>
                    <div className="card-actions">
                    <Link to="/counselling"> <button className="btn bg-pink-900 text-pink-200 rounded-full h-10 px-5 m-2 ">
                          See More
                        </button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
