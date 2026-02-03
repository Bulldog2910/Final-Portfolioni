import { useEffect, useState } from "react";
import './githubAllRepos.css';

function GithubRequest(){
    const [numRepos, setNumRepos] = useState(0);
    const username = "Bulldog2910";

    const fetchGithub = async () =>{
        const response = await fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            const numberRepos = data.public_repos;
            setNumRepos(numberRepos);
            console.log(`User ${username} has ${numRepos} public repositories.`);
            return data;
        })
        .catch(error => console.error('Error fetching data:', error));
    }

    useEffect(() => {
        const data = fetchGithub();
    })
    

    return (
        <div>
            <div className="githubflex">
                <div>
                    <h1 className="githubH1">Github: {username}</h1>
                </div>
                <div className="circle">
                    <p className="numRepos">{numRepos}</p>
                </div> 
                <div>
                    <h1 className="githubH1">Number of public repos</h1>
                </div>
                
            </div>
        </div>
        
    )
}

export default GithubRequest;