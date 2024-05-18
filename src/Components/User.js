// import React from 'react'
// import axios from 'axios'

// function User() {
//     axios.get(`http://localhost:3001/admin/get`)
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
//   return (
//     <div>
//         <h1>Users Page</h1>
//     </div>
//   )
// }

// export default User

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
    const [adminData, setAdminData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/admin/get')
            .then(res => {
                // Assuming the response contains an array of admin data
                setAdminData(res.data);
            })
            .catch(err => {
                console.error('Error fetching admin data:', err);
            });
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    const handleUpdate=()=>{

    }
    const handleDelete=()=>{
        
    }

    return (
        <div>
            <h1>Users Page</h1>
            <ul>
                {adminData.map(admin => (
                    <li key={admin._id}>
                        {/* Display admin data attributes */}
                        {admin.name} {admin.number} {admin.email} 
                        <button onClick={handleUpdate}>Update</button>
                        <button onClick={handleDelete}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default User;
