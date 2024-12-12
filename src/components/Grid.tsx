// Mock data
import { gridItems } from "@/mock";

// Components
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => {
          return <BentoGridItem key={item.id} item={item} />;
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
