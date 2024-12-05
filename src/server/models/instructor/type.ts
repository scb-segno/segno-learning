export interface Instructor {
  instructorId: string;
  name: string;
  instruments: string[];
  locationsAvailable?: string[];
}

export interface InstructorCreate {
  name: string;
  instruments: string[];
  locationsAvailable?: string[];
}

export interface InstructorUpdate {
  name?: string;
  instruments?: string[];
  locationsAvailable?: string[];
}

export interface InstructorUpdateWhereInput {
  instructorId: string;
}

// Context type for resolver
export interface Context {
  // Define any context properties if needed (e.g., authentication)
}
