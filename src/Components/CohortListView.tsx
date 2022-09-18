import React, { useState } from 'react'
import { CohortList, exampleUser } from 'store'
import { Cohort as CohortType } from 'models'
import Cohort from 'Shared/Cohort'
import Button from 'Shared/Button'

import { TOAST_SETTINGS } from 'Constants/index'

import { toast } from 'react-toastify'

const CohortListView = () => {
  const [userCohort, setUserCohort] = useState(false)
  const [cohorts, setCohorts] = useState(CohortList)
  const changeCohorts = (event: React.MouseEvent<HTMLElement>) => {
    const value = event.currentTarget.getAttribute('name')
    let userCohort // for state updation
    let temp: Array<CohortType>
    if (value === 'user') {
      // if user has clicked See Your Registered Cohorts
      // filtering out all those cohorts whose memberlist has the userId
      temp = cohorts.filter((cohort) => cohort.members.includes(exampleUser.id))
      userCohort = true
    } else {
      temp = CohortList
      userCohort = false
    }
    setUserCohort(userCohort)
    setCohorts(temp)
  }

  const registerCohorts = (courseId: string, cohortId: string) => {
    //  First we will check if that cohort is already registered by the user
    let registered = cohorts.findIndex(
      (cohort) =>
        cohort['course'] === courseId && cohort.members.includes(exampleUser.id)
    )
    if (registered > -1) {
      //  cohart is already registered
      toast.error(
        'You have already registered the cohort for that course: You can have only 1 cohart against paricular course',
        TOAST_SETTINGS
      )
    } else {
      //  if that cohort is not already registered by the user then we will add that user to members list of that cohort
      let temp: Array<CohortType> = cohorts.map((cohort) => {
        cohort['id'] === cohortId && cohort.members.push(exampleUser.id)
        return cohort
      })
      setCohorts(temp)
      toast.success('Cohort registered Successfully', TOAST_SETTINGS)
    }
  }

  return (
    <div className='flex flex-col p-4 gap-4 text-[20px] font-medium'>
      <div className='flex gap-4'>
        <Button
          name={'all'}
          title={'See All Cohorts'}
          selectedStatus={!userCohort}
          onClick={changeCohorts}
        />

        <Button
          name={'user'}
          title={'See Your Registered Cohorts'}
          selectedStatus={userCohort}
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
        registered = cohort.members.includes(exampleUser.id)

        return !userCohort && !registered ? (
          <Cohort
            key={cohort.id}
            cohort={cohort}
            allSelected={true}
            onClick={() => registerCohorts(cohort.course, cohort.id)}
          />
        ) : (
          userCohort && registered && (
            <Cohort
              key={cohort.id}
              cohort={cohort}
              allSelected={false}
              onClick={() => registerCohorts(cohort.course, cohort.id)}
            />
          )
        )
      })}
    </div>
  )
}

export default CohortListView
