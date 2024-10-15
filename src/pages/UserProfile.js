import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
    const { username } = useParams();
    const [error, setError] = useState(null);
    const [profile, setProfile] = useState({}); 

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch('/data/profile.json'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setProfile(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProfile();
    }, [username]);

    if (error) {
        return <div>Data fetching failed: {error}</div>;
    }

    const updateProfile = () => {
       
        setProfile({
            name: 'Milani',
            email: 'Mizo.email@example.com',
            age: '35'
        });
    };

    return ( 
        <div> 
            <div className="card">
                <h1>Name:{profile.name || 'Loading...'}</h1>
                <p>Email:{profile.email || 'Loading...'}</p>
                <p>Age:{profile.age || 'Loading...'}</p> 
            </div>
            <button onClick={updateProfile}>
                Click to contact!
            </button>
        </div> 
    ); 
}

export default UserProfile;
