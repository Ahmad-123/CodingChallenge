import React, { useState } from 'react'

import { CohortList, exampleUser } from '../store'
import { Cohort as CohortType } from '../models'
import Cohort from '../Common/Cohort'
import Button from '../Common/Button'

const CohortListView = () => {
  const [userCohort, setUserCohort] = useState(false)
  const [cohorts, setCohorts] = useState(CohortList)

  const changeCohorts = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.getAttribute('name') === 'user') {
      // if user has clicked See Your Registered Cohorts
      // filtering out all those cohorts whose memberlist has the userId
      let temp: Array<CohortType> = cohorts.filter((Cohort) => {
        if (Cohort.members) {
          for (let i = 0; i < Cohort.members.length; i++) {
            if (Cohort.members[i] === exampleUser.id) return true
          }
        }
        return false
      })
      setUserCohort(true)
      setCohorts(temp)
    } else {
      setCohorts(CohortList)
      setUserCohort(false)
    }
  }

  const registerCohorts = (courseId: string, cohortId: string) => {
    //  First we will check if that cohort is already registered by the user
    let registered = false
    cohorts.map((cohort, index) => {
      if (cohort['course'] === courseId) {
        cohort.members?.map((member) => {
          if (member === exampleUser.id) registered = true
        })
      }
      return cohort
    })
    if (registered) {
      //  cohart is already registered
      alert(
        'You have already registered the cohart for that course: You can have only 1 cohart against paricular course'
      )
    } else {
      //  if that cohort is not already registered by the user then we will add that user to members list of that cohort
      let temp: Array<CohortType> = cohorts.map((cohort, index) => {
        if (cohort['id'] === cohortId) {
          cohort.members.push(exampleUser.id)
        }
        return cohort
      })
      setCohorts(temp)
    }
  }

  return (
    <div className='flex flex-col p-4 gap-4 text-[20px] font-medium'>
      <div className='flex gap-4'>
        <Button name='all' title={'See All Cohorts'} onClick={changeCohorts} />

        <Button
          name={'user'}
          title={'See Your Registered Cohorts'}
          onClick={changeCohorts}
        />
      </div>

      {cohorts.length === 0 && (
        <p className='w-full flex justify-center p-4 '>
          You have currently registered zero cohorts
        </p>
      )}

      {cohorts.map((cohort) => {
        let registered = false

        return (
          <div
            className='flex flex-row justify-between items-center p-4  bg-slate-100'
            key={cohort.id}
          >
            <Cohort
              id={cohort?.id}
              course={cohort?.course}
              coach={cohort?.coach}
              members={cohort?.members}
              time={cohort.time}
              day={cohort.day}
            />
            {cohort.members?.map((member) => {
              if (member === exampleUser.id) return (registered = true)
            })}

            {/*  We will display all cohorts but register option will be only for those cohorts which were not already registered by user */}
            {!userCohort && !registered ? (
              <Button
                name={'user'}
                title={'Register Cohort'}
                onClick={() => registerCohorts(cohort.course, cohort.id)}
              />
            ) : (
              <p className='text-slate-700'>Already registered</p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default CohortListView
