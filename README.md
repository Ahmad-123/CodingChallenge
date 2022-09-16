# Codary Werkstudenten Coding Challenge

In one of the steps in our booking process the user has to select a cohort, in our system a cohort is a group of children participating in a course together. A cohort always meets at a certain day and time and has a dedicated coach. Before this step the user has already chosen the course he wants to book.

Your task is to create a one-page app that lets the user select a cohort.

For that you need to do:

- Create mockup cohorts in `store.ts`
- Display all cohorts
- Display all the cohorts that a user is member of
- Let user choose a cohort

Feel free to create as many cohorts in the `store.ts` file as you like. The data schema of courses, users, and cohorts is described in `models.ts`.

/////////////////////////// Ahmad Nawaz ////////////////////////////////////////////////////////////

Brief description of implementation

1. Store.ts
    - I have used exmapleUser (from store) as a loggedIn user.
    - I have used CourseList instead of a singleCourse for better Visualization or app flow. All the courses in the CourseList are acting as the registered courses against the logged In user.

2. CohortListView.tsx
    - It will display all the available cohorts.
    - when user will click register Cohort. A new entry will be added to the members list of that cohart in CohartList.
    - A user can only register for 1 cohort against 1 course. Otherwise he will be shown an alert that he has already registered the cohort for that course.
    - Once the user will click See Registered Cohorts. All cohorts registered by the user for different courses will be displayed. By default a user will have 0 registered cohort.
