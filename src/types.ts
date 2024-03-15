type SetItem = {
  id: number;
  index: number;
  value: number;
};

type ExerciseItem = {
  id: number;
  name: string;
  setList: SetItem[];
};

type WorkoutItem = {
  id: number;
  title: string;
  exercises: ExerciseItem[];
};
