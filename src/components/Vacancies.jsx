import React, { useEffect, useState } from 'react';
import VacancyCard from './VacancyCard';

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);

  // This useEffect hook will run on component mount to simulate fetching data
  useEffect(() => {
    // Dummy data to simulate fetching from database or API endpoint
    const data = [
      {
        id: 1,
        title: "Math Teacher",
        location: "New York, NY",
        salary: "$60,000 - $70,000 per year",
        description: "We are seeking a math teacher for our primary school. The ideal candidate will have a degree in mathematics and prior teaching experience.",
      },
      {
        id: 2,
        title: "Art Teacher",
        location: "Los Angeles, CA",
        salary: "$50,000 - $60,000 per year",
        description: "We are looking for a creative and enthusiastic art teacher to join our team. The ideal candidate will have a degree in art education and experience teaching primary school students.",
      },
      {
        id: 3,
        title: "School Nurse",
        location: "Chicago, IL",
        salary: "$45,000 - $55,000 per year",
        description: "We are seeking a qualified school nurse to provide medical care and first aid to our students. The ideal candidate will have a nursing degree and experience working with children.",
      },
    ];

    setVacancies(data);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Vacancies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {vacancies.map(vacancy => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
    </div>
  );
};

export default Vacancies;
