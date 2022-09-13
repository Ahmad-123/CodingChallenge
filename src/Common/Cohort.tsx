import React, { useState, useEffect } from 'react'
import { Cohort as CohortType } from '../models'
import { CourseList } from '../store'

const Cohort: React.FC<CohortType> = (cohort) => {
  const [courseName, setCourseName] = useState('')
  // finding the courseName from CourseList against courseID for displaying purpose
  const findCourse = () => {
    let temp = CourseList.find((course) => course.id === cohort.course)
    temp && setCourseName(temp.name)
  }
  useEffect(() => {
    findCourse()
  }, [])
  return (
    <div className=' flex-col' id={cohort.id}>
      <h1>Course: {courseName}</h1>
      <h1> Instructor: {cohort.coach}</h1>
      <h1> Time: {cohort.time}</h1>
      <h1> Day: {cohort.day}</h1>

      <div className='flex gap-4'>
        members are
        {cohort.members?.map((member, index) => {
          return <div key={index}>{member}</div>
        })}
      </div>
    </div>
  )
}

export default Cohort
