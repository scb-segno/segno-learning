import { Lesson } from '../models/lesson/type';

const mockLesson = (): Lesson => {
  return {
    lessonId: '516a4044-ca54-4237-9a5e-0c2abc2be05f',
    studentId: '3d2020c5-65d9-4689-92b1-b2080d2e4dea';
    studentName: 'Saul Goodman';
    instructorId: '77c9fd8b-7736-44ef-b819-25de87ec1264';
    instructorName: 'Bob Loblaw';
    date: '	1745708400',
    instrument: 'piano';
    location?: 'Covington';
    assessment?: Assessment;
  }
}