import '../../index.css';
import phpLogo from './php-svgrepo-com.svg';
import netLogo from './dotnet-ar21.svg';
import Reactlogo from './logo192.png';
import pythonlogo from './python-3.svg';
import postgreslogo from './postgresql-logo-svgrepo-com.svg'
import chatbotIndex from '../../img/chatbot.png';
import krsveiviser from './krsveiviser.png';

function MyProjects() {
  return (
    <div className="grid gap-10 px-[5vw] pt-[5vh] md:grid-cols-2">

      {/* PHP Chatbot */}
      <div className="grid gap-4 p-6 ">

        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">PHP Chatbot</h1>
          <img src={phpLogo} alt="PHP logo" className="w-10 h-30" />
        </div>

        <div className="h-25 flex items-center justify-center bg-gray-50">
          <img
            src={chatbotIndex}
            alt="front page of my php chatbot solution"
            className="max-h-full object-contain rounded-3xl"
          />
        </div>

        <p className="text-sm leading-relaxed text-gray-800">
          A simple rule based chatbot using API and scoring system to find the
          question and answer that best fits the users question. Fully working
          admin site with secure authentication and authorization.
        </p>
      </div>

      {/* Kartverket */}
      <div className="grid gap-4 p-6 ">

        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Kartverket Project</h1>
          <img src={netLogo} alt=".Net logo" className="w-24 h-auto" />
        </div>

        <div className="w-full aspect-video flex items-center justify-center">
          <iframe
            className='w-full h-full rounded-3xl'
            src='https://www.youtube.com/embed/I0Xd1DqnbHM?autoplay=1&loop=1&mute=1&playlist=I0Xd1DqnbHM&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3'
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
        </div>
        <p className="text-sm leading-relaxed text-gray-800">
          Collaboration with Kartverket to help citizens report missing or
          incorrect map data. Users can track cases, draw on the map, and
          caseworkers manage all submissions with role-based access.
        </p>
      </div>
      {/* Kristiansand Kommune */}
      <div className="grid gap-4 p-6 ">

        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Kristiansand Kommune</h1>
          <img src={Reactlogo} alt="React logo" className="w-12 h-auto" />
          <img src={pythonlogo} alt="Python logo" className="w-24 h-auto" />
          <img src={postgreslogo} alt="Postegresql logo" className="w-14 h-auto" />
        </div>

        <div className="w-full aspect-video flex items-center justify-center">
          <img
            src={krsveiviser}
            alt="Part of the veiviser solution done for Kristiansand kommune"
            className="max-h-full object-contain rounded-3xl"
          />
        </div>
        <p className="text-sm leading-relaxed text-gray-800">
          Collaboration with Kristiansand municipality. Where our task was to improve on the existing veiviser. 
          Our solution cuts down on questions by making the user draw on the map. Making it so users don't have to
          fin all sorts of documents. These question are answered by doing some calculation on the database using postGIS
          and using the calculated data.
          
        </p>
      </div>

    </div>
  );
}

export default MyProjects;
