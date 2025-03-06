import React from 'react';

interface ProjectSectionProps {
  id: string;
  title: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
  features: string[];
  useCases?: string[];
  community?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, description, videoSrc, imageSrc, features, useCases, community }) => {
  return (
    <section className="p-6 my-6 bg-black bg-opacity-70 rounded-lg shadow-md flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-4">
        <h2 className="text-xl text-[gold] font-bold mb-4">{title}</h2>
        <p className="mb-4 text-[white]">{description}</p>
        <div className="mb-4">
          <h3 className="text-lg text-[gold] font-semibold">Features:</h3>
          {features.map((feature, index) => (
            <p className='text-[gold] ' key={index}>{feature}</p>
          ))}
        </div>
        {useCases && (
          <div className="mb-4">
            <h3 className="text-lg text-[gold] font-semibold">Use Cases:</h3>
            <p className='text-[gold] '>{useCases}</p>
          </div>
        )}
        {community && (
          <div className="mb-4">
            <h3 className="text-lg text-[gold] font-semibold">Community:</h3>
            <p className='text-[gold] '>{community}</p>
          </div>
        )}
      </div>
      <div className="md:w-1/2 p-4">
        {videoSrc && (
          <video className="w-full rounded-lg mb-4" autoPlay>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {imageSrc && (
          <img className="w-full rounded-lg mb-4" src={imageSrc} alt={title} />
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
