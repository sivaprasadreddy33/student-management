export function studentReducer(students, action) {

  switch (action.type) {

    // Display API students
    case "SET_STUDENTS":

      return action.payload;


    // Add new student
    case "ADD_STUDENT":

      return [

        ...students,

        {

          ...action.payload,

          id: Date.now()

        }

      ];


    // Update student
    case "UPDATE_STUDENT":

      return students.map((student) => {

        if (student.id === action.payload.id) {

          return action.payload;

        }

        return student;

      });


    // Delete student
    case "DELETE_STUDENT":

      return students.filter(

        (student) => student.id !== action.payload

      );


    default:

      return students;

  }

}