import { JSX } from 'react';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import { useNavigate } from "react-router-dom";
import Contact from '../components/Modals/Contact'
const OurWork = (): JSX.Element => {
  const navigate =  useNavigate();
  return (
    <div className="min-h-screen bg-gray-700 bg-opacity-20">
      <div className="container mx-auto px-4">
        <ProjectSection
          id="raverace"
          title="RaveRace - Racing Game"
          description="A thrilling racing game that combines high-speed action with stunning visuals."
          videoSrc="https://i.imgur.com/vF3PSMJ.mp4"
          features={['Multiplayer modes', 'Customizable cars', 'Unique tracks']}
        
        />
        <ProjectSection
          id="blockfridge"
          title="BlockFridge - Mobile Web3 Prepayments App"
          description="An innovative mobile app that leverages Web3 technology for secure and convenient prepayments."
          imageSrc="/blockFridge.png"
          features={['Secure prepayments', 'Ease of use', 'Blockchain integration']}
          useCases={["Ideal for small businesses and individuals looking for a secure way to manage prepayments."]}
        />
        <ProjectSection
          id="ravetown"
          title="RaveTown - SocialFi Web3 Game on Avalanche"
          description="An engaging SocialFi game built on Unity, combining social interaction with Web3 elements."
          videoSrc="https://i.imgur.com/u2tL9z6.mp4"
          features={['Social interaction', 'In-game economy', 'Unique gameplay experiences']}
          community="Regular community events and engagement activities to build a strong player base."
        />
      </div>
      <button onClick={() => { navigate("/contact"); }} className="hover:text-gray-400"></button>
          <Contact />
    </div>
  );
};

export default OurWork;
