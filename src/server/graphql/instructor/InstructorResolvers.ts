import {
  Instructor,
  InstructorCreate,
  InstructorUpdate,
  InstructorUpdateWhereInput,
  Context
} from '../../models/instructor/type';

const instructors: Instructor[] = []; // This would typically be a database or an ORM

export const InstructorResolvers = {
  Query: {
    instructor: (
      parent: any,
      args: { instructorId: string },
      context: Context
    ): Instructor | undefined => {
      return instructors.find(
        (instructor) => instructor.instructorId === args.instructorId
      );
    },

    instructors: (parent: any, args: any, context: Context): Instructor[] => {
      return instructors;
    }
  },

  Mutation: {
    instructorCreate: (
      parent: any,
      { data }: { data: InstructorCreate },
      context: Context
    ): Instructor => {
      const newInstructor: Instructor = {
        instructorId: String(instructors.length + 1), // Unique ID generation
        ...data
      };
      instructors.push(newInstructor);
      return newInstructor;
    },

    instructorUpdate: (
      parent: any,
      {
        data,
        where
      }: { data: InstructorUpdate; where: InstructorUpdateWhereInput },
      context: Context
    ): Instructor => {
      const instructorIndex = instructors.findIndex(
        (instructor) => instructor.instructorId === where.instructorId
      );
      if (instructorIndex === -1) throw new Error('Instructor not found');

      const updatedInstructor: Instructor = {
        ...instructors[instructorIndex],
        ...data
      };
      instructors[instructorIndex] = updatedInstructor;
      return updatedInstructor;
    }
  }
};
