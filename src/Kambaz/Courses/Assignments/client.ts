import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(
    `${REMOTE_SERVER}/api/assignments/${assignmentId}`
  );
  return response.data;
};
