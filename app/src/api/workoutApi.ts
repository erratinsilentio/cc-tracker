import { ExerciseFromDB, Workout, WorkoutFromDB } from "../types/types";
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

export const addExercises = async (
  workoutId: string,
  userId: string,
  workout: Workout
) => {
  const workoutExercises = workout.exercises.map((exercise) => {
    return {
      ...exercise,
      repetitions: [...exercise.repetitions],
      workoutId: workoutId,
      userId: userId,
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

export const getAllWorkouts = async (userId: string) => {
  let { data: workouts, error } = await supabase
    .from("workouts")
    .select()
    .eq("userId", userId);

  if (error) {
    console.error(error);
    return;
  }

  if (workouts?.length === 1) {
    return workouts[0] as WorkoutFromDB;
  }

  return workouts as WorkoutFromDB[];
};

export const getAllExercises = async (userId: string) => {
  let { data: exercises, error } = await supabase
    .from("workoutExercises")
    .select()
    .eq("userId", userId);

  if (error) {
    console.error(error);
    return;
  }

  return exercises as ExerciseFromDB[];
};
