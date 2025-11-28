import { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

const QRGenerator = () => {
  const [url, setUrl] = useState("");
  const svgRef = useRef(null);

  const saveAsSVG = () => {
    const svgElement = svgRef.current.querySelector("svg");
    if (!svgElement) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);

    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "qr-code.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  return (
    <div>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter a URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
      />
      <div ref={svgRef}>{url && <QRCodeSVG value={url} size={200} />}</div>
      {url && (
        <button
          onClick={saveAsSVG}
          style={{ marginTop: "20px", padding: "8px 12px" }}
        >
          Save as SVG
        </button>
      )}
    </div>
  );
};

export default QRGenerator;
