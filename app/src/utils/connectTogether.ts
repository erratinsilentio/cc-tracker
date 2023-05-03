import { ExerciseFromDB, Workout, WorkoutFromDB } from "../types/types";

export const connectTogether = (
  workouts: WorkoutFromDB[] | WorkoutFromDB,
  exercises: ExerciseFromDB[]
): Workout | Workout[] => {
  if (!Array.isArray(workouts)) {
    return {
      series: workouts.series,
      dateCreated: workouts.dateCreated,
      exercises: exercises.map((exercise) => {
        return {
          name: exercise.name,
          level: exercise.level,
          repetitions: exercise.repetitions,
        };
      }),
    };
  } else {
    return workouts.map((workout) => {
      return {
        series: workout.series,
        dateCreated: workout.dateCreated,
        exercises: exercises
          .filter((exercise) => exercise.workoutId === workout.id)
          .map((ex) => {
            return {
              name: ex.name,
              level: ex.level,
              repetitions: ex.repetitions,
            };
          }),
      };
    });
  }
};
