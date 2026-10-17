
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.json({
    app: "Rawi Alzalam",
    status: "running"
  });
});

app.post("/api/video", async (req, res) => {
  try {
    const apiKey = process.env.MAGIC_HOUR_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "API key is not configured on the server."
      });
    }

    const { prompt } = req.body || {};

    if (typeof prompt !== "string" || !prompt.trim()) {
      return res.status(400).json({
        error: "Please provide a video prompt."
      });
    }

    // API endpoint and request format must be verified
    // against your Magic Hour developer documentation.
    return res.status(501).json({
      error: "Video generation is not connected yet.",
      message: "Configure the official Magic Hour API endpoint first."
    });
  } catch (error) {
    console.error("Video request failed:", error.message);

    return res.status(500).json({
      error: "The video request failed."
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Rawi Alzalam server listening on port ${PORT}`);
});
