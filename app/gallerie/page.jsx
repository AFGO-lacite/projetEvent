import Gallerie from "@/components/Gallerie";
import gallerie from "@/public/gallerie.json";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "Gallerie",
  description: "Gallerie du site web CarTuningShow.",
  openGraph: {
    title: "Gallerie",
    description: "Gallerie du site web CarTuningShow.",
    images: ["/logo.png"],
  },
};

console.log(gallerie);
export default function GalleriePage() {
  return (
    <div>
      <Gallerie images={gallerie} />
    </div>
  );
}
