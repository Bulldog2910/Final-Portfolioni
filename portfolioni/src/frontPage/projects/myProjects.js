import './myProjects.css'
import phpLogo from './php-svgrepo-com.svg'
import netLogo from './dotnet-ar21.svg'
function MyProjects(){
    return (
        <div class='schoolProjectsGrid'>
            <div class='gridObject'>
                <div class='subGrid'>
                    <h1 class='object'>PHP Chatbot</h1>   
                    <img src={phpLogo} width='100rem' height='auto'/>
                </div>      
                <p class='gridObjectInfo'>
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
            <div class='gridObject'>
                <div class='subGrid'>
                    <h1 class='object'>Kartverket project</h1>
                    <img src={netLogo} width='100rem' height='auto'/>
                </div>
                <p class='gridObjectInfo'>
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