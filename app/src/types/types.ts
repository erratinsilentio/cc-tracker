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

export interface Step {
  name:
    | Pullups
    | Squats
    | Dips
    | Extension
    | Hinges
    | Pushups
    | Rows
    | AntiExtension
    | AntiRotation;
  link: string;
}

export interface FullExercise {
  id: number;
  name: Exercise;
  steps: Step[];
  reps: string;
}

export interface WorkoutExercise {
  name: Exercise;
  level: string;
  repetitions: number[];
}

export interface Workout {
  series: string;
  exercises: WorkoutExercise[];
  dateCreated?: string;
}

export interface WorkoutFromDB {
  id: string;
  dateCreated: string;
  series: string;
}

export interface ExerciseFromDB extends WorkoutExercise {
  id: string;
  workoutId: string;
}

export enum Paths {
  Home = "/",
  Exercises = "/exercises",
  Workouts = "/workouts",
  AddWorkout = "/workouts/add",
  EditWorkout = "/workouts/edit",
  Login = "/login",
}

export enum Pullups {
  ONE = "Scapular pulls",
  TWO = "Arch hangs",
  THREE = "Pullup negatives",
  FOUR = "Pullups",
  FIVE = "Weighted pullups",
}

export enum Squats {
  ONE = "Assisted squats",
  TWO = "Squats",
  THREE = "Split squats",
  FOUR = "Bulgarian split squats",
  FIVE = "Beginner shrimp squats",
  SIX = "Intermediate shrimp squats",
  SEVEN = "Advanced shrimp squats",
  EIGHT = "Weighted shrimp squats",
}

export enum Dips {
  ONE = "Parallel Bar Support Hold",
  TWO = "Negative dips",
  THREE = "Parallel bar dips",
  FOUR = "Weighted dips",
}

export enum Hinges {
  ONE = "Romanian deadlift",
  TWO = "Single legged deadlift",
  THREE = "Banded nordic curl negative",
  FOUR = "Banded nordic curl",
  FIVE = "Nordic curls",
}

export enum Rows {
  ONE = "Vertical rows",
  TWO = "Incline rows",
  THREE = "Horizontal rows",
  FOUR = "Wide rows",
  FIVE = "Weighted inverted rows",
}

export enum Pushups {
  ONE = "Vertical pushups",
  TWO = "Incline pushups",
  THREE = "Full pushups",
  FOUR = "Diamond pushups",
  FIVE = "Pseudo planche pushups",
}

export enum AntiExtension {
  ONE = "Plank",
  TWO = "Ring AB rollouts",
}

export enum AntiRotation {
  ONE = "Banded pallof press",
}

export enum Extension {
  ONE = "Reverse hyperextension",
}
