import Event from "./Event.jsx";
import moto from "@/public/Harley.png";

export const MotoPage = () => {
  return (
    <Event
      pic={moto}
      time="20/02/2024"
      localisation="Ottawa"
      titre="Moto"
      price="25$"
    >
      <div>
        <p>
          Amis motards et passionnés de Harley Davidson, marquez vos calendriers
          ! Nous vous invitons à un rassemblement exceptionnel qui promet d'être
          l`&apos;`événement de l`&apos;`année pour tous les amateurs de Harley à
          Ottawa-Kanata et au-delà.
        </p>
        <h3>Au Programme :</h3>
        <ul>
          <li>
            <strong>Exposition de Modèles Mythiques :</strong> Découvrez une
            incroyable collection de motos Harley Davidson, des classiques
            vintage aux derniers modèles.
          </li>
          <li>
            <strong>Parade de Motos :</strong> Participez ou admirez une parade
            mémorable à travers les rues pittoresques de Kanata.
          </li>
          <li>
            <strong>Rencontres avec des Passionnés :</strong> Échangez avec une
            communauté chaleureuse et partagez votre passion pour les mythiques
            motos américaines.
          </li>
          <li>
            <strong>Stands et Accessoires :</strong> Explorez une variété de
            stands offrant des accessoires, des pièces et des vêtements de moto.
          </li>
          <li>
            <strong>Musique et Ambiance Festive :</strong> Profitez d'une
            ambiance festive avec de la musique live, des rafraîchissements et
            plus encore !
          </li>
        </ul>
        <p>
          <strong>
            Ne manquez pas cette occasion unique de vivre votre passion et de
            créer des souvenirs inoubliables.
          </strong>{" "}
          Que vous soyez un fier propriétaire d`&apos;`une Harley ou simplement un
          admirateur, cet événement est fait pour vous !
        </p>
        <p>
          <strong>
            Rejoignez-nous pour une journée pleine d`&apos;`aventures, de camaraderie
            et de pur plaisir sur deux roues.
          </strong>
        </p>
        <p>
          <em>#HarleyDavidsonOttawa #RassemblementMoto #PassionHarley</em>
        </p>
      </div>
    </Event>
  );
};
