import React,{useState,useEffect} from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";

const Admissions = () => {

  const [admission, setAdmission] = useState()
  console.log(admission)
  useEffect(() => {

      const fetchAdmission = async () => {
        try {
          const response = await axios.get(`${api_endpoint}/api/admission`);

          setAdmission(response.data.admission[0].content);
        } catch (error) {
          console.log(error);
        }
      };
      fetchAdmission();

  }, []);



  return (
    <div className="container w-[95%] mx-auto min-h-fit bg-white shadow-md rounded-lg py-6" id="admissions">
      <h2 className="flex justify-center px-1 text-3xl font-bold text-gray-800 mb-2">
        Admissions
      </h2>

     

      {admission && <div dangerouslySetInnerHTML={{ __html: admission }}></div>}  
    
    </div>
  );
};

export default Admissions;
