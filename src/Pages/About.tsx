import {JSX} from 'react';

const About =():JSX.Element =>{
    return(
        <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center mb-8">Our Story – Ystudios</h2>
    <p className="text-lg text-gray-300 text-center mb-12">
      Ystudios was born out of a dream of undergrads with a clear vision. Driven by the pure desire to be the new generation of dreamers who will revolutionalize the creative industries and leave a solid mark on the sillicon savannha.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Mission</h3>
        <p className="text-gray-300">
          
        </p>
      </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Vision</h3>
        <p className="text-gray-300">
          To be a leading technomedia company , known for our innovative apps and games, compelling films and soulful music.
        </p>
      </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Values</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li><strong>Creativity:</strong> No structure in this small lithe team allows for quick consensus and room for everyones creativity</li>
          <li><strong>Innovation:</strong> We constantly push boundaries by learning and discovering tools that could fit our ends</li>
          <li><strong>Community:</strong> What we love most is building ecosystems that empower all participants in our application</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    )
}

export default About;