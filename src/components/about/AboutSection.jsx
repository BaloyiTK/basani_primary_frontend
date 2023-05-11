import React from "react";
import AboutCard from "./AboutCard";

const AboutSection = () => {
  return (
    <div className="container w-full mx-auto min-h-fit bg-gray-100 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mt-8 mb-8">
          About Us
        </h2>
        <div className="md:flex md:justify-center md:space-x-12 ">
          <AboutCard
            imgSrc="./Goal_Mission.jpg"
            title="Mission"
            description={
              <ul>
                <li>
                  <span class="font-bold text-3xl">.</span> We will involve all
                  stakeholders and the larger community to achieve our vision,
                  both practically and financially.
                </li>
                <li>
                  <span class="font-bold text-3xl">.</span> We will strive to
                  fundraise directly from our community and local businesses by
                  requesting donations.
                </li>
              </ul>
            }
          />

          <AboutCard
            imgSrc="/values.jpg"
            title="Values"
            description={
              <ul>
                <li>
                  <span className="font-bold text-3xl">.</span>{" "}
                  <span className="font-bold">Excellence</span> : Striving for
                  excellence in everything they do, and encouraging students to
                  do the same.
                </li>
                <li>
                  <span className="font-bold text-3xl">.</span>{" "}
                  <span className="font-bold">Respect</span> : Valuing respect
                  for oneself, for others, and for the environment.
                </li>
                <li>
                  <span className="font-bold text-3xl">.</span> <span></span>{" "}
                  Integrity: Believing in honesty, integrity, and ethical
                  behavior.
                </li>
                <li>
                  <span className="font-bold text-3xl">.</span>{" "}
                  <span className="font-bold">Inclusivity</span>: Valuing
                  inclusivity and diversity, and promoting equity and inclusion.
                </li>
                <li>
                  <span className="font-bold text-3xl">.</span>{" "}
                  <span className="font-bold">Collaboration</span> : Believing
                  in the power of collaboration and teamwork.
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
                  <span className="font-bold text-3xl">.</span> To provide
                  excellence in our school, equip pupils with necessary skills,
                  and strive for quality education.
                </li>
                <li>
                  <span className="font-bold text-3xl">.</span> To develop learners
                  for the community of Tshiawelo and the larger society of South
                  Africa.
                </li>
                <li>
                  <span className="font-bold text-3xl">.</span> We will develop
                  pupils holistically, addressing their physical, spiritual,
                  mental, and other needs.
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
            <li>
              {" "}
              <span>1.</span> Mr. J Makhubele
            </li>
            <li>
              {" "}
              <span>2.</span> Mr. EBR Shilubane
            </li>
            <li>
              {" "}
              <span>3.</span> Mrs. M Radzilane
            </li>
            <li>
              {" "}
              <span>4.</span> Mrs. E Mabanga
            </li>
            <li>
              {" "}
              <span>5.</span> Ms Sambo
            </li>
            <li>
              {" "}
              <span>6.</span> Mr. AJ Halala
            </li>
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
              <li>
                {" "}
                <span class="font-bold text-2xl">.</span> Mr. NJ Mahale - 12 Jan
                1965 to Dec 1966{" "}
              </li>
              <li>
                {" "}
                <span class="font-bold text-2xl">.</span> Mr. JM Khuvuthu - 15
                Jan 1967 to Dec 1969
              </li>
              <li>
                {" "}
                <span class="font-bold text-2xl">.</span> Mr, AP Baloyi - 19 Jan
                1970 to MArch 1974
              </li>
              <li>
                {" "}
                <span class="font-bold text-2xl">.</span> Mr. JN Mabale - 01 Apr
                1974 to June 1994{" "}
              </li>
              <li>
                {" "}
                <span class="font-bold text-2xl">.</span> Mr. E Maluleke(fomrmer
                learner) 01 January 1997 to Date
              </li>
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
