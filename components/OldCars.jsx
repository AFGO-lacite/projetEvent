import Event from "./Event";
import Oldcar from "@/public/old.png";

export const OldCars = () => {
  return (
    <Event
      pic={Oldcar}
      titre={"Old Cars"}
      price={"20$"}
      localisation={"Orleans"}
      time={"05/04/2024"}
    >
      <div>
        <p>
          Passionnés de voitures d'époque, marquez ce jour dans vos calendriers
          ! Nous vous invitons à un événement exceptionnel qui promet d'être le
          point culminant de l'année pour tous les amateurs de voitures
          anciennes à Ottawa-Orléans et ses alentours.
        </p>
        <h3>Au Programme :</h3>
        <ul>
          <li>
            <strong>Exposition de Véhicules Vintage :</strong> Découvrez une
            collection étonnante de voitures anciennes, témoins de l'histoire et
            de l'évolution de l'automobile.
          </li>
          <li>
            <strong>Défilé de Voitures Classiques :</strong> Participez ou
            admirez un défilé spectaculaire mettant en vedette des voitures
            historiques à travers les rues d'Orléans.
          </li>
          <li>
            <strong>Rencontres avec des Collectionneurs :</strong> Échangez avec
            des passionnés et des collectionneurs, et partagez votre amour pour
            les voitures classiques.
          </li>
          <li>
            <strong>Stands et Souvenirs :</strong> Explorez une variété de
            stands offrant des articles, des pièces et des souvenirs liés aux
            voitures d'époque.
          </li>
          <li>
            <strong>Ambiance Rétro et Musique :</strong> Profitez d'une
            atmosphère nostalgique avec de la musique d'époque, des
            rafraîchissements et plus encore.
          </li>
        </ul>
        <p>
          <strong>
            Ne manquez pas cette occasion unique de plonger dans le passé et de
            créer des souvenirs inoubliables.
          </strong>{" "}
          Que vous soyez propriétaire d'une voiture d'époque ou simplement
          amateur, cet événement est fait pour vous !
        </p>
        <p>
          <strong>
            Rejoignez-nous pour une journée de découverte, de partage et de
            célébration de l'histoire automobile.
          </strong>
        </p>
        <p>
          <em>
            #VoituresAnciennesOttawaOrleans #ExpoVoitureVintage
            #PassionAutoRetro
          </em>
        </p>
      </div>
    </Event>
  );
};
