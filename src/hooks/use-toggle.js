import { useState } from "react";

const useToggle = () => {
  const [showData, setShowData] = useState(true);

  const toggleHandler = () => {
    setShowData((curState) => !curState);
  };
  return { showData, toggleHandler };
};

export default useToggle;
