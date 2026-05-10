import { useState, useEffect } from "react";
import { CoverPage } from "./pages/CoverPage";
import { ReadingPage } from "./pages/ReadingPage";
import { TransitionOverlay } from "./components/TransitionOverlay";
import { decades } from "./data/decades";

const FONT_URL = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,800;9..144,900&family=Syne:wght@400;600;700;800&display=swap";

export default function App() {
  const [stage, setStage] = useState("cover");
  const [decade, setDecade] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONT_URL;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const openBook = () => {
    setTransitioning(true);
    setTimeout(() => {
      setStage("reading");
      setTransitioning(false);
    }, 150);
  };

  const goNext = () => {
    if (transitioning || decade >= decades.length - 1) return;
    setTransitioning(true);
    setTimeout(() => {
      setDecade(d => d + 1);
    }, 100);
    setTimeout(() => {
      setTransitioning(false);
    }, 200);
  };

  const goPrev = () => {
    if (transitioning || decade <= 0) return;
    setTransitioning(true);
    setTimeout(() => {
      setDecade(d => d - 1);
    }, 100);
    setTimeout(() => {
      setTransitioning(false);
    }, 200);
  };

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden", background: "#000" }}>
      <TransitionOverlay visible={transitioning} />
      {stage === "cover" ? (
        <CoverPage onOpen={openBook} />
      ) : (
        <ReadingPage
          decade={decade}
          onNext={goNext}
          onPrev={goPrev}
          isFirst={decade === 0}
          isLast={decade === decades.length - 1}
          flipping={transitioning}
        />
      )}
    </div>
  );
}
