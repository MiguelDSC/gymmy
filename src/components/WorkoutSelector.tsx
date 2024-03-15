import { useState } from "react";

type WorkoutItemListProps = {
  list: WorkoutItem[];
};

const WorkoutSelector = ({ list }: WorkoutItemListProps) => {
  const [selectedItem, setSelectedItem] = useState<WorkoutItem>();

  const handleItemClick = (item: WorkoutItem) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {list.map((workoutItem) => (
        <div
          key={workoutItem.id}
          onClick={() => handleItemClick(workoutItem)}
          style={{
            border: "1px solid",
            padding: "20px",
            margin: "10px",
            cursor: "pointer",
            backgroundColor:
              selectedItem && selectedItem.id === workoutItem.id
                ? "red"
                : "green",
          }}
        >
          {workoutItem.title}
        </div>
      ))}
    </div>
  );
};

export default WorkoutSelector;
