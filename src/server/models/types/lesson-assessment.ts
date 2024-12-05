interface Assessments {
  student: string;
  instructor: string;
  date: Date;
  assessments: Assessment[];
}

interface Assessment {
  goal: string;
  goalMet: boolean | null;
}
