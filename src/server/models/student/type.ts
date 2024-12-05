export interface Student {
  studentId: string;
  name: string;
  instruments: string[];
  instructors: string[];
}

export interface StudentCreate {
  name: string;
  instruments: string[];
  instructors: string[];
}

export interface StudentUpdate {
  name?: string;
  instruments?: string[];
  instructors?: string[];
}

export interface StudentUpdateWhereInput {
  studentId: string;
}

// Context type for resolver
export interface Context {
  // Define any context properties if needed (e.g., authentication)
}
