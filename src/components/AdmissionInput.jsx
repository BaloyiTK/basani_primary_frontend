import React from 'react'
import RichTextEditor from './RichTextEditor';

const AdmissionInput = () => {
  
    return (
        <div>
          <h2 className="flex justify-center text-2xl font-bold text-gray-800 mb-4">
            School Admission Information
          </h2>
          <RichTextEditor For="admission" />
        </div>
      );

}

export default AdmissionInput