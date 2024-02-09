import { useEffect, useState } from "react";

const useElementData = (ref) => {
  const [elementData, setElementData] = useState({});
  const [renders, setRenders] = useState(0);
  const isVisible = useOnScreen(ref);

  function updateData() {
    const elementRectData = ref.current.getBoundingClientRect();
    const data = Object.assign(elementRectData, { isVisible });
    setElementData(data);
  }

  useEffect(() => {
    updateData();
  }, [renders, isVisible]);

  return [ref.current, elementData, renders, setRenders];
};
export default useElementData;
