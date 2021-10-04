import React, { useEffect, useRef } from "react"

export default function QRCode({ data }) {
  let qrCode

  const ref = useRef(null)
  useEffect(() => {
    if (qrCode) qrCode.append(ref.current)
  }, [])

  if (typeof window === "undefined") return null

  const QRCodeStyling = require("qr-code-styling")
  qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    data,
    margin: 0,
    qrOptions: { typeNumber: "0", mode: "Byte", errorCorrectionLevel: "Q" },
    imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 10 },
    dotsOptions: { type: "dots", color: "#0033ad", gradient: null },
    image: "/cardano-ada-logo.png",
    dotsOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: "#6a1a4c",
        color2: "#6a1a4c",
        rotation: "0",
      },
    },
    cornersSquareOptions: { type: "extra-rounded", color: "#000000" },
    cornersSquareOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: "#000000",
        color2: "#000000",
        rotation: "0",
      },
    },
    cornersDotOptions: { type: "dot", color: "#000000" },
    cornersDotOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: "#000000",
        color2: "#000000",
        rotation: "0",
      },
    },
    backgroundOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: "#ffffff",
        color2: "#ffffff",
        rotation: "0",
      },
    },
  })

  return <div ref={ref} />
}
