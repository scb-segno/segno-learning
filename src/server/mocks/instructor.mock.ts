import { Instructor } from '../models/instructor/type';

const mockTeacher = (): Instructor => {
  return {
    instructorId: '77c9fd8b-7736-44ef-b819-25de87ec1264',
    name: 'Bob Loblaw',
    instruments: ['piano', 'voice'],
    locationsAvailable: ['New Orleans Uptown', 'Mandeville', 'Covington']
  };
};
