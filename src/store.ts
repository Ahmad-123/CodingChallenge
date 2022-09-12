import { User, Course, Cohort } from './models'

// TODO: Give this user an id
//  This is the logged in user
export const exampleUser: User = {
  id: '1',
  name: 'Ahmad Nawaz',
}

//  User's registered courses
export const CourseList: Array<Course> = [
  {
    id: '8EpIqAtYYDc7KWvxXGqd',
    name: 'Python for Kids',
  },
  {
    id: '1',
    name: 'React Js Course',
  },
  {
    id: '2',
    name: 'Mongo DB course',
  },
  {
    id: '3',
    name: 'Express JS course',
  },
]
export const CohortList: Array<Cohort> = [
  {
    id: '1',
    course: '8EpIqAtYYDc7KWvxXGqd',
    coach: 'Ahmad',
    members: ['2', '3', '4', '5', '6'],
    time: '01:15',
    day: 1, // day when the course takes place from 1 to 6
  },
  {
    id: '2',
    course: '8EpIqAtYYDc7KWvxXGqd',
    coach: 'Ali',
    members: ['2', '3', '4', '5', '6'],
    time: '02:15',
    day: 3, // day when the course takes place from 1 to 6
  },
  {
    id: '3',
    course: '1',
    coach: 'Jamshaid',
    members: ['3', '4', '5', '6'],
    time: '03:15',
    day: 2, // day when the course takes place from 1 to 6
  },
  {
    id: '4',
    course: '1',
    coach: 'Ayub',
    members: ['2', '3', '4', '5', '6'],
    time: '02:15',
    day: 6, // day when the course takes place from 1 to 6
  },
  {
    id: '5',
    course: '2',
    coach: 'Ali',
    members: ['2', '3', '4', '5', '6'],
    time: '04:15',
    day: 4, // day when the course takes place from 1 to 6
  },
  {
    id: '6',
    course: '3',
    coach: 'Ahmad',
    members: ['2', '3', '4', '5', '6'],
    time: '07:15',
    day: 5, // day when the course takes place from 1 to 6
  },

  {
    id: '7',
    course: '3',
    coach: 'Basharat',
    members: ['2', '3', '4', '5', '6'],
    time: '07:15',
    day: 1, // day when the course takes place from 1 to 6
  },
]
