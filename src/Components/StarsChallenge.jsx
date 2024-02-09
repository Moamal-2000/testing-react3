import { useEffect, useRef } from "react";

const StarsChallenge = () => {
  const numberOfStars = 7;
  const starsContainerRef = useRef(null);
  const isRated = useRef(false);

  function handleHoverStars(e, starsEle) {
    if (isRated.current) return;

    const target = e.target;
    const targetIndex = starsEle.indexOf(target);

    starsEle.forEach((star, i) =>
      star.classList[targetIndex < i ? "remove" : "add"]("active")
    );
  }

  function handleRateStars(e, starsEle) {
    isRated.current = !isRated.current;
    handleHoverStars(e, starsEle);
  }

  useEffect(() => {
    const starsEle = [...starsContainerRef.current.children];
    starsEle[0].classList.add("active");

    starsEle.forEach((star) => {
      star.addEventListener("mousemove", (e) => handleHoverStars(e, starsEle));
      star.addEventListener("click", (e) => handleRateStars(e, starsEle));
    });
  }, [isRated]);

  return (
    <div className="stars-challenge">
      <div className="stars" ref={starsContainerRef}>
        {Array.from({ length: numberOfStars }, (_, i) => (
          <i className="fa-solid fa-star star-icon" key={i}></i>
        ))}
      </div>
    </div>
  );
};
export default StarsChallenge;
