export interface Lesson {
  lessonId: string;
  studentId: string;
  studentName: string;
  instructorId: string;
  instructorName: string;
  date: Date;
  instrument: string;
  location?: string;
  assessment?: Assessment;
}

export interface Assessment {
  assessmentSummary?: string;
}

export interface Objective {
  objective: string;
  priority?: number;
  goalMet?: boolean;
}

export interface FutureLesson {
  lessonInfo: Lesson;
  objectives: Objective;
}

export interface LessonCreate {
  studentId: string;
  studentName: string;
  instructorId: string;
  instructorName: string;
  date: Date;
  instrument: string;
  location?: string;
  assessment?: Assessment;
}

export interface LessonUpdate {
  studentId?: string;
  studentName?: string;
  instructorId?: string;
  instructorName?: string;
  date?: Date;
  instrument?: string;
  location?: string;
  assessment?: Assessment;
}

export interface LessonUpdateWhereInput {
  lessonId: string;
}

// Context type for resolver
export interface Context {
  // Define any context properties if needed (e.g., authentication)
}
