import React from 'react';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: 'School Closed Due to Inclement Weather',
      date: 'April 16, 2023',
      content: 'Due to the forecasted inclement weather, Our School will be closed on Monday, April 17, 2023. Please stay safe and warm.'
    },
    {
      id: 2,
      title: 'Welcome Back to School!',
      date: 'January 10, 2023',
      content: 'We hope you all had a wonderful holiday break! We are excited to welcome our students back to school on Monday, January 16, 2023. We have some fun activities planned for the first week of school, so don\'t miss out!'
    },
    {
      id: 3,
      title: 'Annual School Picnic',
      date: 'May 20, 2023',
      content: 'Our annual school picnic will take place on Saturday, May 27, 2023 at the Botanical Gardens. All students, parents, and staff are invited to attend. Please see the office for more information and to purchase tickets.'
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Announcements</h2>
        <ul>
          {announcements.map((announcement) => (
            <li key={announcement.id} className="mb-8">
              <h3 className="text-lg font-bold">{announcement.title}</h3>
              <p className="text-gray-500 mb-2">{announcement.date}</p>
              <p className="">{announcement.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Announcements;
