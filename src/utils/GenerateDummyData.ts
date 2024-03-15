export const generateDummyData = () => {
  const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const randomExerciseItem = (id: number) => ({
    id: id,
    name: `Exercise ${id}`,
    setList: Array.from({ length: randomInt(1, 5) }, (_, index) => ({
      id: index + 1,
      index: index + 1,
      value: randomInt(5, 20),
    })),
  });

  const randomWorkoutItem = (id: number) => ({
    id: id,
    title: `Workout ${id}`,
    exercises: Array.from({ length: randomInt(1, 3) }, (_, index) =>
      randomExerciseItem(index + 1)
    ),
  });

  const workoutItems = Array.from({ length: randomInt(1, 10) }, (_, index) =>
    randomWorkoutItem(index + 1)
  );

  return workoutItems;
};

const dummyData = generateDummyData();
console.log(dummyData);
