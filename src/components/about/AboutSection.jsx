import React from "react";
import AboutCard from "./AboutCard";

const AboutSection = () => {
  return (
    <div className="container w-full mx-auto min-h-screen bg-gray-100 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mt-8 mb-8">
          About Us
        </h2>
        <div className="md:flex md:justify-center md:space-x-12 ">
          <AboutCard
            imgSrc="./Goal_Mission.jpg"
            title="Mission"
            description="Our mission is to provide a safe, nurturing, and stimulating learning environment that enables each child to reach their full potential. We develop core academic skills and promote social, emotional, and physical development."
          />
          <ul></ul>
          <AboutCard
            imgSrc="/values.jpg"
            title="Values"
            description={
              <ul>
                <li>
                  <span className="font-bold">Excellence</span> : Striving for
                  excellence in everything they do, and encouraging students to
                  do the same.
                </li>
                <li>
                  <span className="font-bold">Respect</span> : Valuing respect
                  for oneself, for others, and for the environment.
                </li>
                <li>
                  <span></span> Integrity: Believing in honesty, integrity, and
                  ethical behavior.
                </li>
                <li>
                  <span className="font-bold">Inclusivity</span>: Valuing
                  inclusivity and diversity, and promoting equity and inclusion.
                </li>
                <li>
                  <span className="font-bold">Collaboration</span> : Believing
                  in the power of collaboration and teamwork.
                </li>
                <li>
                  <span className="font-bold"> Lifelong Learning</span>: Valuing
                  lifelong learning and encouraging students to be curious and
                  inquisitive.
                </li>
              </ul>
            }
          />

          <AboutCard
            imgSrc="/Vision.png"
            title="Vision"
            description={
              <ul>
                <li>
                  <span className="font-bold text-3xl">.</span>To be a leading
                  school in academic excellence, character development, and
                  community engagement
                </li>
                <li>
                  .To empower learners to become lifelong learners capable of
                  adapting to a rapidly changing world
                </li>
                <li>
                  .To create a learning environment that fosters creativity,
                  critical thinking, and innovation
                </li>
                <li>
                  .To value diversity and promote inclusivity, where all
                  students feel safe, respected, and supported
                </li>
                <li>
                  .To cultivate a culture of respect, responsibility, and
                  ethical behavior among all members of the school community
                </li>
              </ul>
            }
          />
        </div>
      </div>

      {/* School History */}

      <div class="p-2 bg-white shadow-lg rounded-lg overflow-hidden mx-auto mt-4 md:w-full">
        <div class="py-2">
          <h2 class="flex justify-center text-xl font-bold text-gray-800">
            Our History
          </h2>
        </div>
        <div class="bg-gray-100 py-2">
          <p class="text-gray-600 leading-7">
            Our school has a rich history spanning over many years. It was
            founded in 1960 with just 33 pupils and was housed at Ndondo Higher
            Primary School.
          </p>
          <p class="text-gray-600 leading-7 mt-3">
            In 1962, all the remaining children were withdrawn from Ndondo
            Primary and transferred to Chiawelo No.3, which was then known as
            Pfanani Primary School under Mrs. Mageza.
          </p>
          <p class="text-gray-600 leading-7 mt-3">
            In 1963, Tlakani Combined School was built. This school was
            officially divided into lower and higher primary. The lower primary
            was named Tlakeni Lower Primary, and the higher primary was named
            Chiawelo No.5 Higher Primary School.
          </p>
          <p class="text-gray-600 leading-7 mt-3">
            On January 12th, 1965, Chiawelo No.5 Higher Primary (Stand 1781
            Chiawelo Ext 2) occupied its premises that had nine classrooms. Mr.
            NJ Mabale was the first principal of this school with a staff of six
            assistant teachers, namely:
          </p>
          <ul class="text-gray-600 leading-7 mt-3">
            <li>Mr. J Makhubele</li>
            <li>Mr. EBR Shilubane</li>
            <li>Mrs. M Radzilane</li>
            <li>Mrs. E Mabanga</li>
            <li>Ms Sambo</li>
            <li>Mr. AJ Halala</li>
            <span></span>
          </ul>
          <p class="text-gray-600 leading-7 mt-3">
            The school had an enrollment of 445, and in the same year (1965), it
            was named{" "}
            <span className="font-bold">Basani Higher Primary School</span>.
          </p>
          <p class="text-gray-600 leading-7 mt-3">
            <span className="font-bold underline">School Commitee Members</span>
            <br />
            The first elected parents into a school commitee were: ME. M Mdima,
            Mr. S Mongwe, Mr R Mbhalati , Mr. J Macheke and MR. M Baloyi
            <br />
            The following were Princicals of Basani Primary School
            <ul class="text-gray-600 leading-7 mt-3">
              <li>Mr. NJ Mahale - 12 Jan 1965 to Dec 1966 </li>
              <li>Mr. JM Khuvuthu - 15 Jan 1967 to Dec 1969</li>
              <li>Mr, AP Baloyi - 19 Jan 1970 to MArch 1974</li>
              <li>Mr. JN Mabale - 01 Apr 1974 to June 1994 </li>
              <li>Mr. E Maluleke(fomrmer learner) 01 January 1997 to Date</li>
            </ul>
          </p>

          <p class="text-gray-600 leading-7 mt-3">
            In the year 1975 Basani Primary introduced Foundation Phase and it
            was called Basani Primary School
          </p>

          <p class="text-gray-600 leading-7 mt-3">
            In 1990 a new admission block, five extra classrooms, one
            multipurpose class, skills classroom and extra toilets for learners
            were built by the Department of Education and Training. The skills
            classroom was chnaged to Gauteng Online in 2004 and multipurpose to
            library
          </p>

          <p class="text-gray-600 leading-7 mt-3">
            Most of our learners depend on the school feeding scheme for their
            day's meal
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
