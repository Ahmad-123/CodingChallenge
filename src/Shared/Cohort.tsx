import React, { useState, useEffect } from 'react'
import { Cohort as CohortType } from 'models'
import Button from 'Shared/Button'
import { CourseList } from 'store'

interface Props {
  // all props are required
  cohort: CohortType
  allSelected: boolean
  onClick: React.MouseEventHandler
}
const Cohort: React.FC<Props> = ({ cohort, allSelected, onClick }) => {
  const [courseName, setCourseName] = useState('')
  // finding the courseName from CourseList against courseID for displaying purpose
  const findCourse = () => {
    let temp = CourseList.find((course) => course.id === cohort.course)
    temp && setCourseName(temp.name)
  }
  useEffect(() => {
    findCourse()
  }, [CourseList])
  return (
    <div
      className='flex flex-row justify-between items-center p-4  bg-slate-100'
      key={cohort.id}
    >
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
      {allSelected && (
        <Button name={'user'} title={'Register Cohort'} onClick={onClick} />
      )}
    </div>
  )
}

export default Cohort
