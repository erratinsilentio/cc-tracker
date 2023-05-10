import {
  AntiExtension,
  AntiRotation,
  Dips,
  Exercise,
  Extension,
  Hinges,
  Pullups,
  Pushups,
  Rows,
  Squats,
} from "../types/types";

export const pullupSteps = [
  "Scapular pulls",
  "Arch hangs",
  "Pullup negatives",
  "Pullups",
  "Weighted pullups",
];
export const squatSteps = [
  "Assisted squats",
  "Squats",
  "Split squats",
  "Bulgarian split squats",
  "Beginner shrimp squats",
  "Intermediate shrimp squats",
  "Advanced shrimp squats",
  "Weighted shrimp squats",
];
export const dipSteps = [
  "Paraller bar support holds",
  "Negative dips",
  "Parallel bar dips",
  "Weighted dips",
];
export const hingeSteps = [
  "Romanian deadlift",
  "Single legged deadlift",
  "Banded nordic curl negative",
  "Banded nordic curl",
  "Nordic curls",
];
export const rowSteps = [
  "Vertical rows",
  "Incline rows",
  "Horizontal rows",
  "Wide rows",
  "Weighted inverted rows",
];
export const pushupSteps = [
  "Vertical pushup",
  "Incline pushup",
  "Full pushup",
  "Diamond pushup",
  "Pseudo planche pushup",
];
export const antiExtensionSteps = ["Plank", "Ring AB rollouts"];
export const antiRotationSteps = ["Banded palloff press"];
export const extensionSteps = ["Reverse hyperextension"];

export const exercises = [
  {
    id: 0,
    name: Exercise.Pullups,
    steps: [
      {
        name: Pullups.ONE,
        link: "https://www.youtube.com/embed/FgYoc4O-cio?start=82",
      },
      { name: Pullups.TWO, link: "https://www.youtube.com/embed/C995b3KLXS4" },
      {
        name: Pullups.THREE,
        link: "https://www.youtube.com/embed/EkpJkHpJXmM",
      },
      { name: Pullups.FOUR, link: "https://www.youtube.com/embed/eGo4IYlbE5g" },
      { name: Pullups.FIVE, link: "https://www.youtube.com/embed/c90yZnUXdQM" },
    ],
    reps: "5-8",
  },
  {
    id: 1,
    name: Exercise.Squats,
    steps: [
      { name: Squats.ONE, link: "https://www.youtube.com/embed/OuR_Fp7AB0c" },
      { name: Squats.TWO, link: "https://www.youtube.com/embed/zJBLDJMJiDE" },
      {
        name: Squats.THREE,
        link: "https://get-strong.fit/images/GobletSplitSquat.jpg",
      },
      {
        name: Squats.FOUR,
        link: "https://www.youtube.com/embed/kkdmHTASZg8?start=76",
      },
      {
        name: Squats.FIVE,
        link: "https://www.youtube.com/embed/TKt0-c83GSc?start=191",
      },
      {
        name: Squats.SIX,
        link: "https://www.youtube.com/embed/TKt0-c83GSc?start=191",
      },
      {
        name: Squats.SEVEN,
        link: "https://www.youtube.com/embed/TKt0-c83GSc?start=191",
      },
      {
        name: Squats.EIGHT,
        link: "https://www.youtube.com/embed/TKt0-c83GSc?start=191",
      },
    ],
    reps: "5-8",
  },
  {
    id: 2,
    name: Exercise.Dips,
    steps: [
      {
        name: Dips.ONE,
        link: "https://antranik.org/wp-content/uploads/2014/01/antranik-holding-support-hold-on-parallel-bars.jpg",
      },
      { name: Dips.TWO, link: "https://www.youtube.com/embed/T3Scqw1BbCc" },
      { name: Dips.THREE, link: "https://www.youtube.com/embed/2z8JmcrW-As" },
      { name: Dips.FOUR, link: "https://www.youtube.com/embed/nNMC4NK-FiU" },
    ],
    reps: "5-8",
  },
  {
    id: 3,
    name: Exercise.Hinges,
    steps: [
      { name: Hinges.ONE, link: "https://www.youtube.com/embed/FUwsp0OVyVM" },
      { name: Hinges.TWO, link: "https://www.youtube.com/embed/iDV8r5u6En0" },
      { name: Hinges.THREE, link: "https://www.youtube.com/embed/HUXS3S2xSX4" },
      { name: Hinges.FOUR, link: "https://www.youtube.com/embed/HUXS3S2xSX4" },
      { name: Hinges.FIVE, link: "https://www.youtube.com/embed/d8AAPcYxPo8" },
    ],
    reps: "5-8",
  },
  {
    id: 4,
    name: Exercise.Rows,
    steps: [
      { name: Rows.ONE, link: "https://www.youtube.com/embed/rloXYB8M3vU" },
      { name: Rows.TWO, link: "https://www.youtube.com/embed/LR2EnFWpVao" },
      { name: Rows.THREE, link: "https://www.youtube.com/embed/dvkIaarnf0g" },
      { name: Rows.FOUR, link: "https://www.youtube.com/embed/f3yfJ0RStQw" },
      { name: Rows.FIVE, link: "https://www.youtube.com/embed/3cYR6pis5zc" },
    ],
    reps: "5-8",
  },
  {
    id: 5,
    name: Exercise.Pushups,
    steps: [
      { name: Pushups.ONE, link: "https://www.youtube.com/embed/5NPvv40gd3Q" },
      { name: Pushups.TWO, link: "https://www.youtube.com/embed/4dF1DOWzf20" },
      {
        name: Pushups.THREE,
        link: "https://www.youtube.com/embed/IODxDxX7oi4",
      },
      { name: Pushups.FOUR, link: "https://www.youtube.com/embed/_4EGPVJuqfA" },
      { name: Pushups.FIVE, link: "https://www.youtube.com/embed/Cdmg0CfMZeo" },
    ],
    reps: "5-8",
  },
  {
    id: 6,
    name: Exercise.AntiExtension,
    steps: [
      {
        name: AntiExtension.ONE,
        link: "https://www.youtube.com/embed/44ScXWFaVBs?start=10",
      },
      {
        name: AntiExtension.TWO,
        link: "https://www.youtube.com/embed/LBUfnmugKLw",
      },
    ],
    reps: "8-12",
  },
  {
    id: 7,
    name: Exercise.AntiRotation,
    steps: [
      {
        name: AntiRotation.ONE,
        link: "https://www.youtube.com/embed/AH_QZLm_0-s",
      },
    ],
    reps: "8-12",
  },
  {
    id: 8,
    name: Exercise.Extension,
    steps: [
      {
        name: Extension.ONE,
        link: "https://www.youtube.com/embed/ZeRsNzFcQLQ",
      },
    ],
    reps: "8-12",
  },
];
