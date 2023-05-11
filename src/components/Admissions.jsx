import React from "react";

const Admissions = () => {
  return (
    <div className="container w-[95%] mx-auto min-h-fit bg-white shadow-md rounded-lg py-6" id="admissions">
      <h2 className="flex justify-center px-1 text-3xl font-bold text-gray-800 mb-2">
        Admissions
      </h2>
      <p className="text-gray-700 mb-4">
        We're delighted that you're interested in enrolling your child at our
        school. Our admissions process is designed to be as simple and
        straightforward as possible, and we're here to help you every step of
        the way.
      </p>
      <p className="text-gray-700 mb-4">
        Please note that Gauteng applications for Grade 1 and Grade 8 is done
        online. You can visit{" "}
        <a className="underline text-blue-500" href="https://www.gdeadmissions.gov.za">
          gde admissions
        </a>{" "}
        to apply.
      </p>
  

      <p className="text-gray-700">
        If you have any questions about the admissions process, please don't
        hesitate to contact us. We look forward to welcoming your child to our
        school!
      </p>
    </div>
  );
};

export default Admissions;
