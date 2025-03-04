import {JSX} from 'react';

const About =():JSX.Element =>{
    return(
        <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center mb-8">Our Story – Ystudios</h2>
    <p className="text-lg text-gray-300 text-center mb-12">
      Ystudios was born out of a dream to create a hub for creativity and innovation in Kenya. Founded by a team of passionate storytellers, game developers, and music producers, we aim to showcase the rich culture and talent of Africa to the world.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Mission</h3>
        <p className="text-gray-300">
          To create high-quality, culturally rich entertainment that resonates with audiences globally.
        </p>
      </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Vision</h3>
        <p className="text-gray-300">
          To be a leading entertainment company in Africa, known for our innovative games, compelling films, and soulful music.
        </p>
      </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Values</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li><strong>Creativity:</strong> We believe in the power of imagination.</li>
          <li><strong>Innovation:</strong> We constantly push boundaries to deliver unique experiences.</li>
          <li><strong>Community:</strong> We are committed to nurturing local talent and telling African stories.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    )
}

export default About;