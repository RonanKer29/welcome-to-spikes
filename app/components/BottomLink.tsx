import Link from "next/link";

const BottomLink = () => {
  return (
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 text-center">
      <Link
        className="flex items-center gap-3 rounded-full border border-border px-6 py-1 backdrop-blur-sm font-medium text-base leading-8 group hover:bg-muted-foreground/5 hover:scale-105 hover:transition-all transition-all shadow shadow-transparent hover:shadow-muted-foreground "
        href="https://www.spikes.dev"
      >
        www.spikes.dev →
      </Link>
    </div>
  );
};

export default BottomLink;
