import { GridPattern } from "../public/grid-pattern";
import { SpikesIcon } from "../public/spikes_icon";
import BottomLink from "./components/BottomLink";
import Card from "./components/Card";
import { bottomLineCard, topLineCard } from "./constants/index";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Gradient en haut */}
      <div
        className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-[#7059F2] via-transparent to-transparent"
        style={{
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      ></div>

      <GridPattern className="absolute top-0 left-0 w-full h-auto rotate-180 z-0" />

      <div className="absolute top-0 w-full flex gap-2 justify-center items-center mt-10">
        <SpikesIcon />
        <h1 className="text-white">Spikes</h1>
      </div>

      <div className="flex flex-col gap-5 justify-center items-center h-full">
        <div className="flex gap-5 justify-center ">
          {topLineCard.map((card, index) => (
            <Card
              key={index}
              profilePic={card.profilePic}
              name={card.name}
              username={card.username}
              text={card.text}
            />
          ))}
        </div>
        <div className="flex gap-5 justify-center">
          {bottomLineCard.map((card, index) => (
            <Card
              key={index}
              profilePic={card.profilePic}
              name={card.name}
              username={card.username}
              text={card.text}
            />
          ))}
        </div>
      </div>

      {/* Centré au-dessus de GridPattern */}
      <BottomLink />

      <GridPattern className="absolute bottom-0 left-0 w-full h-auto z-0" />

      <div
        className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-b from-[#7059F2] via-transparent to-transparent"
        style={{
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      ></div>
    </div>
  );
}
