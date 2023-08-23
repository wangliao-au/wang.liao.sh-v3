import React from "react";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";

const HomePage: React.FC = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section className="home">
      <div className="home__content flex flex-col items-center justify-center">
        <Button
          color="primary"
          variant="shadow"
          size="lg"
          onPress={handleConfetti}
        >
          Download CV
        </Button>
      </div>
    </section>
  );
};

export default HomePage;
