import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";

const ProgramTable = () => {
	const [programs, setPrograms] = useState([]);

	console.log(programs)

	useEffect(() => {
	  const fetchPrograms = async () => {
		const response = await axios.get(`${api_endpoint}/api/program`);
		setPrograms(response.data.programs);
		console.log(response)
	  };
	  fetchPrograms();
	}, []);
  
	const handleDelete = async (program) => {
		const programId = program._id;
	  
		try {
		  await axios.delete(`${api_endpoint}/api/program/${programId}`);
	  
		  const updatedPrograms = programs.filter((p) => p._id !== programId);
		  
		  setPrograms(updatedPrograms);
		} catch (error) {
		  console.error(error);
		}
	  };
	  
	return (
	  <div className="container mx-auto py-8">
		<div className="overflow-x-auto">
		  <div className="w-full overflow-hidden rounded-lg shadow-xs">
			<div className="w-full overflow-x-auto">
			  <table className="w-full table-auto">
				<thead>
				  <tr className="bg-gray-100 border-b border-gray-300">
					<th className="px-4 py-3 text-left text-gray-600 font-bold">
					  Title
					</th>
					<th className="px-4 py-3 text-left text-gray-600 font-bold">
					  Description
					</th>
					<th className="px-4 py-3 text-left text-gray-600 font-bold">
					  Photo
					</th>
					<th className="px-4 py-3 text-left text-gray-600 font-bold">
					  Actions
					</th>
				  </tr>
				</thead>
				<tbody>
				  {programs &&
					programs.map((program) => (
					  <tr key={program._id} className="border-b border-gray-300">
						<td className="px-4 py-3">
						  <div className="flex items-center">
							<div>
							  <p className="text-gray-900 font-bold">
								{program.title}
							  </p>
							
							</div>
						  </div>
						</td>
						<td className="px-4 py-3 text-gray-500">
						  {program.description}
						</td>
				
						<td className="px-4 py-3">
						  <div className="flex items-center">
							<div className="flex-shrink-0 w-10 h-10">
							  <img
								className="w-full h-full rounded-sm"
								src={program.photo}
								alt={program.title}
							  />
							</div>
						  </div>
						</td>
						<td className="px-8 py-3">
						  <div className="flex items-center">
							<button
							  onClick={() => handleDelete(program)}
							  className="text-red-600 hover:text-red-900"
							>
							  <svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							  >
								<path
								  strokeLinecap="round"
								  strokeLinejoin="round"
								  strokeWidth="2"
								  d="M6 18L18 6M6 6l12 12"
								/>
							  </svg>
							</button>
						  </div>
						</td>
					  </tr>
					))}
				</tbody>
			  </table>
			</div>
		  </div>
		</div>
	  </div>
	);
}

export default ProgramTable