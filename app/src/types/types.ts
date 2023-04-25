export interface User {
  id: string;
  email: string;
  workoutNumber: number;
}

export enum Exercise {
  Pushup = "pushup",
  Squat = "squat",
  Pullup = "pullup",
  LegRaise = "leg raise",
  Bridge = "bridge",
  Handstand = "handstand",
}

export interface WorkoutExercise {
  exercise: Exercise;
  level: number;
  repetitions: [number];
}

export interface Workout {
  id: string;
  dateCreated: string;
  dateDone: string;
  userId: string;
  series: number;
  exercises: [WorkoutExercise];
}

export enum Paths {
  Home = "/",
  Exercises = "/exercises",
  Workouts = "/workouts",
  AddWorkout = "/workouts/add",
  EditWorkout = "/workouts/edit",
  Login = "/login",
}
