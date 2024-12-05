import { sensitiveHeaders } from 'http2';
import {
  Student,
  StudentCreate,
  StudentUpdate,
  StudentUpdateWhereInput,
  Context
} from '../../models/student/type';

const students: Student[] = []; // This would typically be a database or an ORM

export const StudentResolvers = {
  Query: {
    student: (
      parent: any,
      args: { studentId: string },
      context: Context
    ): Student | undefined => {
      return students.find((student) => student.studentId === args.studentId);
    },

    students: (parent: any, args: any, context: Context): Student[] => {
      return students;
    }
  },

  Mutation: {
    studentCreate: (
      parent: any,
      { data }: { data: StudentCreate },
      context: Context
    ): Student => {
      const newStudent: Student = {
        studentId: String(students.length + 1), // Unique ID generation
        ...data
      };
      students.push(newStudent);
      return newStudent;
    },

    studentUpdate: (
      parent: any,
      { data, where }: { data: StudentUpdate; where: StudentUpdateWhereInput },
      context: Context
    ): Student => {
      const studentIndex = students.findIndex(
        (student) => student.studentId === where.studentId
      );
      if (studentIndex === -1) throw new Error('Student not found');

      const updatedStudent: Student = { ...students[studentIndex], ...data };
      students[studentIndex] = updatedStudent;
      return updatedStudent;
    }
  }
};
