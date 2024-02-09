import styles from './Accueil.module.css'
import { Articles } from "@/components/Articles"; 
import voiture from "@/public/cts4.png";
import moto from "@/public/cts5.png";
import truck from "@/public/cts6.png";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function Accueil() {
    return (
      <div className={styles.div}>
        <Image
          className={styles.image + " rounded"}
          src={logo}
          alt="logo du site"
        ></Image>
  
        <Articles
          titre="Car Tuning Show"
  
          pic={voiture}
  
          description="image de voiture"
  
          texte="C'est avec une immense fierté et un enthousiasme débordant que Car Tuning Show vous invite à découvrir notre prestigieuse exposition de car tuning. Un événement unique où passion, créativité et ingénierie se rencontrent pour transformer des voitures ordinaires en chefs-d'œuvre roulants.
  
                Dans cette exposition, vous aurez l'opportunité d'admirer une collection époustouflante de véhicules modifiés, chacun témoignant de l'habileté et de l'innovation de ses créateurs. Des voitures classiques méticuleusement restaurées aux bolides modernes équipés des dernières technologies, notre exposition est un véritable paradis pour les amateurs de tuning.
  
                Les artistes et techniciens derrière ces merveilles mécaniques seront présents pour partager leurs expériences, leurs techniques et leur passion pour la customisation automobile. Que vous soyez un modéliste chevronné, un fan de voitures ou simplement curieux d'en apprendre plus sur cet art fascinant, notre exposition offre une expérience immersive dans le monde du car tuning.
  
                En plus de la galerie de véhicules, l'événement comprendra des ateliers interactifs, des démonstrations en direct, et des conférences animées par des experts de l'industrie. Ne manquez pas cette chance unique de plonger dans l'univers du tuning automobile et de vous connecter avec une communauté partageant les mêmes intérêts.
  
                Préparez-vous à être émerveillé, inspiré, et captivé. Rejoignez-nous pour une aventure inoubliable dans l'univers du car tuning. Car Tuning Show vous attend pour une expérience riche en émotions et en découvertes !"
                    
        />
  
        <Articles
          titre="Bikes Show"
  
          pic={moto}
  
          description="image de moto"
  
          texte="Car Tuning Show fait aussi des expositions de motos, un événement dédié aux passionnés de deux-roues. Cette exposition met en lumière une collection impressionnante de motos, allant des modèles classiques et vintages aux créations modernes et customisées. Chaque moto exposée est un témoignage du savoir-faire en matière de design et d'ingénierie, reflétant la riche histoire 
                 
                du motocyclisme ainsi que les tendances actuelles et futures. Les exposants, qu'ils soient collectionneurs ou customisateurs, partagent une passion commune pour la moto et sont enthousiastes à l'idée de partager leurs réalisations et leurs connaissances avec vous. Car Tuning Show crée ainsi un espace unique où les amateurs de motos, qu'ils soient pilotes chevronnés ou simples 
                
                admirateurs, peuvent explorer et célébrer ensemble l'univers fascinant de la moto."
        
        />      
  
        <Articles
          titre="Trucks Show"
  
          pic={truck}
  
          description="image de camion"
  
          texte="Car Tuning Show est ravi de vous convier à sa grandiose exposition de camions, un événement spécialement conçu pour les aficionados de ces puissants véhicules. Au cœur de cette manifestation, vous découvrirez une impressionnante collection de camions, allant des modèles historiques et rétro aux versions modernes et personnalisées. Chaque camion exposé est une célébration de 
            
                l'art de la mécanique et du design, illustrant non seulement l'évolution historique de ces géants de la route mais aussi les tendances et innovations actuelles. Nos exposants, qu'ils soient collectionneurs passionnés ou customisateurs experts, partagent tous un enthousiasme débordant pour le monde du camionnage et sont impatients de partager leurs connaissances et leurs créations 
                
                uniques avec vous. Car Tuning Show offre ainsi un espace privilégié où les amoureux de camions, qu'ils soient professionnels du secteur ou simplement curieux, peuvent se réunir pour explorer et célébrer ensemble l'univers captivant des camions."
        
        />
        
      </div>
    );
  }
  