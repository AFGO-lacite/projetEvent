import Gallerie from "./Gallerie";
import gallerie from "../public/gallerie.json";

console.log(gallerie);
export default function GalleriePage() {
  return (
    <div>
      <Gallerie images={gallerie} />
    </div>
  );
}
