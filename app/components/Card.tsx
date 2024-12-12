import Image from "next/image";

const Card = ({
  profilePic,
  name,
  username,
  text,
}: {
  profilePic: string;
  name: string;
  username: string;
  text: string;
}) => {
  return (
    <div className="relative w-72 rounded-lg bg-gradient-to-b from-[#4C3182] via-[#4C3182] to-[#4C3182] p-[1px]">
      {/* Masque le gradient en haut */}
      <div
        className="absolute inset-0 rounded-lg bg-[#0C0024] z-0 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 85%)",
        }}
      ></div>
      {/* Contenu de la carte */}
      <div
        className="relative bg-card h-full text-card-foreground px-6 py-4 rounded-lg"
        style={{ backgroundColor: "#0C0024" }}
      >
        <div className="flex flex-row items-center gap-2">
          <Image
            src={profilePic}
            alt={name}
            className="rounded-full "
            width={32}
            height={32}
          />
          <div className="flex flex-col">
            <h2 className="text-sm font-medium text-white">{name}</h2>
            <p className="text-xs font-medium text-muted">{username}</p>
          </div>
        </div>
        <p className="mt-2 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Card;
