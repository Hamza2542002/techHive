import { useEffect } from "react";
import { useRef } from "react";

function useOutClick(onClose, handleCapture = true) {
  const ref = useRef(null);
  useEffect(()=>{
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClick, handleCapture);

    return ()=>{
      document.removeEventListener("click", handleClick, handleCapture);
    }
  },[onClose, handleCapture]);

  return ref;
}

export default useOutClick;