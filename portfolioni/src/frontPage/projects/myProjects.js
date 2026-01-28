import './myProjects.css'
import phpLogo from './php-svgrepo-com.svg'
import netLogo from './dotnet-ar21.svg'
function MyProjects(){
    return (
        <div className='schoolProjectsGrid'>
            <div className='gridObject'>
                <div className='subGrid'>
                    <h1 className='object'>PHP Chatbot</h1>   
                    <img src={phpLogo} width='100rem' height='auto'/>
                </div>      
                <p className='gridObjectInfo'>
                    Litt info og sånn Litt info og sånn Litt info og sånn 
                    Litt info og sånn Litt info og sånn Litt info og sånn
                    Litt info og sånn Litt info og sånn Litt info og sånn 
                    Litt info og sånn Litt info og sånn Litt info og sånn
                    Litt info og sånn Litt info og sånn Litt info og sånn 
                    Litt info og sånn Litt info og sånn Litt info og sånn
                    Litt info og sånn Litt info og sånn Litt info og sånn 
                    Litt info og sånn Litt info og sånn Litt info og sånn
                    </p>
                    
            </div>
            <div className='gridObject'>
                <div className='subGrid'>
                    <h1 className='object'>Kartverket project</h1>
                    <img src={netLogo} width='100rem' height='auto'/>
                </div>
                <p className='gridObjectInfo'>
                    Litt info og sånn Litt info og sånn Litt info og sånn 
                    Litt info og sånn Litt info og sånn Litt info og sånn
                    Litt info og sånn Litt info og sånn Litt info og sånn 
                    Litt info og sånn Litt info og sånn Litt info og sånn
                    Litt info og sånn Litt info og sånn Litt info og sånn 
                    Litt info og sånn Litt info og sånn Litt info og sånn
                    Litt info og sånn Litt info og sånn Litt info og sånn 
                    Litt info og sånn Litt info og sånn Litt info og sånn
                </p>
                
            </div>
        </div>
    );
}

export default MyProjects;