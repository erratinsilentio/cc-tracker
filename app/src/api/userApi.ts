import { User } from "../types/types";
import { supabase } from "../utils/supabase";

export const getCurrentSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error(error);
  }
  return data;
};

export const getUser = async (id: string) => {
  let { data: user, error } = await supabase
    .from("users")
    .select()
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }

  return user as User;
};

export const getUserWorkoutNumber = async (id: string) => {
  let { data: workouts, error } = await supabase
    .from("users")
    .select("workoutNumber")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }

  return workouts;
};
