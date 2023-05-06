import React, { useState } from 'react'
import axios from 'axios'
import api_endpoint from '../utils/config'
import { Await } from 'react-router-dom'

const StatsForm = () => {
  const [values, setValues] = useState({
    numberOfLearners: '',
    numberOfTeachers: ''
  })

  const handleChange = event => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }


  const handleSubmit = async event => {
    event.preventDefault()

  await  axios.post(`${api_endpoint}/api/statistics`, values)
      .then((res) => {
        // Handle success
        console.log(res)
        console.log('Form submitted successfully')
      })
      .catch(error => {
        // Handle error
        console.error(error)
      })
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Statistics Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="numberOfLearners">
            Number of Learners
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="numberOfLearners"
            id="numberOfLearners"
            placeholder="Enter number of learners"
            value={values.numberOfLearners}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="numberOfTeachers">
            Number of Teachers
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="numberOfTeachers"
            id="numberOfTeachers"
            placeholder="Enter number of teachers"
            value={values.numberOfTeachers}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default StatsForm
