import { useEffect, useState } from "react";

const HexChallenge = () => {
  const hexCodeChars = '0123456789ABCDEF'
  const [generatedColor, setGeneratedColor] = useState(generateHexCode());
  const [colorMode, setColorMode] = useState("hex")

  document.body.style.background = generatedColor;

  function generateHexCode() {
    let generatedHexCode = ''
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexCodeChars.length)
      const randomHexChar = hexCodeChars[randomIndex];
      generatedHexCode += randomHexChar
    }
    return "#" + generatedHexCode
  }

  function generateRbgCode() {
    let rgbCodes = []
    let generatedRgbCode = ""
    for (let i = 0; i < 3; i++) {
      const randomRgbCode = Math.floor(Math.random() * 255);
      rgbCodes.push(randomRgbCode)
    }
    generatedRgbCode = `rgb(${rgbCodes.join(", ")})`
    return generatedRgbCode
  }

  function handleChangeHex() {
    setColorMode("hex")
    setGeneratedColor(generateHexCode())
  }

  function handleChangeRgb() {
    setColorMode("rgb")
    setGeneratedColor(generateRbgCode())
  }

  function generateColor() {
    const generateColorOnColorMode = colorMode === "hex" ? generateHexCode() : generateRbgCode()
    setGeneratedColor(generateColorOnColorMode)
  }

  useEffect(() => {
    const colorTimer = setInterval(() => generateColor(), 10000);
    return () => clearInterval(colorTimer)
  }, [generatedColor])

  return (
    <div>
      <div className="buttons">
        <button type="button" onClick={() => handleChangeHex()}>Change to Hex</button>
        <button type="button" onClick={() => handleChangeRgb()}>Change to Rgb</button>
        <button type="button" onClick={() => generateColor()}>Generate color</button>
      </div>

      <p className="color-text">{generatedColor}</p>
    </div>
  );
};
export default HexChallenge;
