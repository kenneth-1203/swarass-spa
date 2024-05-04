import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const ChipTabs = ({ tabs }: { tabs: string[] }) => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 px-4">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className="text-md md:text-lg lg:text-xl font-semibold capitalize transition-colors p-2 rounded-md relative"
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="chip-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 border-b-4 border-primary"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
