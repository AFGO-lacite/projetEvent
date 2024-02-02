import Event from "./Event";
import Muscle from "@/public/Muscle.png";

export const MuscleCars = () => {
  return (
    <Event
      pic={Muscle}
      time={"25/03/2024"}
      localisation={"Gatineau"}
      price={"15$"}
      titre={"Muscle Cars"}
    >
      <div>
        <p>
          Amateurs de muscle cars et d'automobiles puissantes, notez cette date
          dans vos agendas ! Nous vous convions à un rassemblement exceptionnel
          qui promet d'être le rendez-vous incontournable de l'année pour tous
          les passionnés de muscle cars à Gatineau-Hull et ses environs.
        </p>
        <h3>Au Programme :</h3>
        <ul>
          <li>
            <strong>Exposition de Véhicules Légendaires :</strong> Admirez une
            impressionnante collection de muscle cars, des classiques
            intemporels aux modèles les plus récents.
          </li>
          <li>
            <strong>Défilé de Voitures :</strong> Participez ou assistez à un
            défilé mémorable à travers les rues de Hull.
          </li>
          <li>
            <strong>Rencontres avec des Enthousiastes :</strong> Échangez avec
            une communauté dynamique et partagez votre passion pour ces voitures
            américaines emblématiques.
          </li>
          <li>
            <strong>Stands et Accessoires :</strong> Découvrez une variété de
            stands proposant des pièces, des accessoires et des souvenirs liés
            aux muscle cars.
          </li>
          <li>
            <strong>Musique et Ambiance Festive :</strong> Profitez d'une
            ambiance festive avec de la musique live, des rafraîchissements et
            bien plus encore !
          </li>
        </ul>
        <p>
          <strong>
            Ne ratez pas cette occasion unique de célébrer votre passion et de
            créer des souvenirs mémorables.
          </strong>{" "}
          Que vous soyez propriétaire d'un muscle car ou simplement amateur, cet
          événement est conçu pour vous !
        </p>
        <p>
          <strong>
            Rejoignez-nous pour une journée pleine d'excitation, de convivialité
            et de plaisir automobile.
          </strong>
        </p>
        <p>
          <em>#MuscleCarsGatineau #ShowVoiture #PassionAutomobile</em>
        </p>
      </div>
    </Event>
  );
};
