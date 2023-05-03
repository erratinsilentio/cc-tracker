import { Workout, WorkoutFromDB } from "../types/types";
import { supabase } from "../utils/supabase";

export const createNewWorkout = async (userId: string, workout: Workout) => {
  const { data: newWorkout, error: workoutError } = await supabase
    .from("workouts")
    .insert([{ userId: userId, series: workout.series }])
    .select()
    .single();

  if (workoutError) {
    console.error(workoutError);
    return;
  }

  return newWorkout as WorkoutFromDB;
};

export const addExercises = async (workoutId: string, workout: Workout) => {
  const workoutExercises = workout.exercises.map((exercise) => {
    return {
      ...exercise,
      repetitions: [...exercise.repetitions],
      workoutId: workoutId,
    };
  });

  const exercisePromises = workoutExercises.map((exercise) => {
    return supabase.from("workoutExercises").insert([exercise]);
  });

  Promise.all(exercisePromises)
    .then(() => {
      console.log("success");
    })
    .catch((error) => console.error(error));
};
