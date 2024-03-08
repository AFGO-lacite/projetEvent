import styles from "@/components/InfoPage.module.css";
export default function Info () {
  return (
    <div className={styles.div}>
      <h2>Description du site web:</h2>

      <div>
        <h3>CarTuningShow: Explorez le Monde du Tuning Automobile</h3>
        <p>
          CarTuningShow est le portail ultime pour tous ceux qui sont captivés
          par l`&apos;`univers du tuning automobile. Notre site web est conçu pour
          offrir une expérience complète et immersive dans le monde des car
          tuning shows.
        </p>
      </div>

      <div>
        <h3>Calendrier des Événements :</h3>
        <p>
          Au cœur de CarTuningShow se trouve un calendrier interactif qui
          affiche toutes les dates importantes des événements de tuning à venir.
          Les utilisateurs peuvent parcourir les événements par date, type ou
          localisation, rendant la recherche d`&apos;`un événement spécifique rapide et
          conviviale.
        </p>
      </div>

      <div>
        <h3>Détails des Événements :</h3>
        <p>
          Chaque événement listé sur notre site est accompagné d`&apos;`une description
          détaillée, incluant le type d`&apos;`événement (comme les shows, les
          compétitions ou les meet-ups), les véhicules présentés, et les
          activités spéciales prévues. Cette section est conçue pour aider les
          visiteurs à trouver des événements qui correspondent parfaitement à
          leurs intérêts.
        </p>
      </div>

      <div>
        <h3>Public Cible :</h3>
        <p>
          Le site est organisé de manière à attirer différents types de
          visiteurs, des experts en tuning aux novices. Des sections sont
          dédiées à éduquer ceux qui sont nouveaux dans le monde du tuning,
          tandis que des contenus plus avancés sont disponibles pour les
          professionnels et les amateurs expérimentés.
        </p>
      </div>

      <div>
        <h3>Achat de Billets :</h3>
        <p>
          Une fonctionnalité clé de CarTuningShow est la possibilité d`&apos;`acheter
          des billets directement sur le site. Les utilisateurs peuvent
          sélectionner leurs événements, choisir leurs sièges et effectuer des
          transactions sécurisées, le tout en quelques clics.
        </p>
      </div>

      <div>
        <h3>Galerie et Communauté :</h3>
        <p>
          Le site propose également une galerie de photos et de vidéos des
          événements passés, permettant aux utilisateurs de vivre ou de revivre
          les moments forts du tuning. Un forum communautaire encourage les
          utilisateurs à partager leurs expériences, à poser des questions et à
          se connecter avec d`&apos;`autres passionnés.
        </p>
      </div>

      <div>
        <h3>Blog et Actualités :</h3>
        <p>
          CarTuningShow ne se limite pas aux événements, il offre aussi un blog
          riche en articles sur les dernières tendances du tuning, des conseils
          techniques, et des interviews d`&apos;`experts du secteur.
        </p>
      </div>

      <div>
        <h2>Site web de référence:</h2>
        <p>
          Notre <a href="https://autoshow.ca/">site web de référence</a> pour
          plus d`&apos;`informations.
        </p>
      </div>
    </div>
  );
};
