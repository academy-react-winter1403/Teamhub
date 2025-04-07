import { LandingCtgTxt } from "../../../../core/constants/mock/LandingCtg";

const icons = ["Icon.svg", "game.svg", "network.svg", "design.svg"];

const CtgCards = () => {
  return (
    <div className="flex gap-10">
      {Array.from({ length: 2 }).map((_, colIndex) => (
        <div
          key={colIndex}
          className={`w-85 h-[700px] flex justify-between flex-col ${
            colIndex === 1 ? "mt-10" : ""
          }`}
        >
          {LandingCtgTxt.slice(colIndex * 2, colIndex * 2 + 2).map(
            (item, index) => {
              const iconIndex = colIndex * 2 + index;
              return (
                <div
                  key={item.title}
                  className="w-82 h-82 bg-white rounded-4xl flex flex-col justify-evenly items-center p-8"
                >
                  <img
                    src={`./${icons[iconIndex]}`}
                    alt={item.title}
                    className="h-24"
                  />
                  <h6 className="font-bold text-2xl">{item.title}</h6>
                  <span>{item.desc}</span>
                </div>
              );
            }
          )}
        </div>
      ))}
    </div>
  );
};

export default CtgCards;
