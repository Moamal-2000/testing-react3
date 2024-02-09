export const activeClass = (
  isActive = false,
  stylesObj,
  className = "active"
) => (isActive ? stylesObj[className] : "");

export const compareAbsoluteParentEle = (element, requiredEle) => {
  let parentElement = element.parentElement;

  while (
    parentElement &&
    requiredEle !== parentElement &&
    requiredEle !== element
  )
    parentElement = parentElement.parentElement;

  return !!parentElement;
};
