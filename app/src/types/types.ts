export interface User {
  id: string;
  email: string;
  workoutNumber: number;
}

export enum Exercise {
  Pushups = "Pushups",
  Squats = "Squats",
  Pullups = "Pullups",
  Dips = "Dips",
  Rows = "Rows",
  Hinges = "Hinges",
  AntiExtension = "Anti Extension",
  AntiRotation = "Anti Rotation",
  Extension = "Extension",
}

export interface WorkoutExercise {
  id: string;
  exercise: Exercise;
  level: number;
  repetitions: Exercise[];
}

export interface Workout {
  id: string;
  dateCreated: string;
  dateDone: string;
  userId: string;
  series: number;
  exercises: WorkoutExercise[];
}

export enum Paths {
  Home = "/",
  Exercises = "/exercises",
  Workouts = "/workouts",
  AddWorkout = "/workouts/add",
  EditWorkout = "/workouts/edit",
  Login = "/login",
}
