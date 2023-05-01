import { Exercise, WorkoutExercise } from "../types/types";

export function findExerciseIndex(
  exercises: WorkoutExercise[],
  exerciseName: Exercise
) {
  for (let i = 0; i < exercises.length; i++) {
    if (exercises[i].name === exerciseName) {
      return i;
    }
  }
  return -1;
}
