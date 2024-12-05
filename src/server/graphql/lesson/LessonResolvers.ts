import {
  Lesson,
  LessonCreate,
  LessonUpdate,
  LessonUpdateWhereInput,
  Context
} from '../../models/lesson/type';

const lessons: Lesson[] = []; // This would typically be a database or an ORM

export const LessonResolvers = {
  Query: {
    lesson: (
      parent: any,
      args: { lessonId: string },
      context: Context
    ): Lesson | undefined => {
      return lessons.find((lesson) => lesson.lessonId === args.lessonId);
    },

    previousLesson: (
      parent: any,
      args: { lessonId: string },
      context: Context
    ): Lesson => {
      const lesson = lessons.find(
        (lesson) => lesson.lessonId === args.lessonId
      );
      if (!lesson) throw new Error('Lesson not found');
      return lesson; // Add any logic to fetch the "previous" lesson
    },

    previousLessons: (parent: any, args: any, context: Context): Lesson[] => {
      return lessons.filter((lesson) => lesson.date < new Date());
    }
  },

  Mutation: {
    lessonCreate: (
      parent: any,
      { data }: { data: LessonCreate },
      context: Context
    ): Lesson => {
      const newLesson: Lesson = {
        lessonId: String(lessons.length + 1), // Unique ID generation
        ...data
      };
      lessons.push(newLesson);
      return newLesson;
    },

    lessonUpdate: (
      parent: any,
      { data, where }: { data: LessonUpdate; where: LessonUpdateWhereInput },
      context: Context
    ): Lesson => {
      const lessonIndex = lessons.findIndex(
        (lesson) => lesson.lessonId === where.lessonId
      );
      if (lessonIndex === -1) throw new Error('Lesson not found');

      const updatedLesson: Lesson = { ...lessons[lessonIndex], ...data };
      lessons[lessonIndex] = updatedLesson;
      return updatedLesson;
    }
  }
};
