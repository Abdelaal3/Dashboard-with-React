import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';

export default function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',


    });
    const [loading, setLoading] = useState(true);



    console.log('This is from User Details Comp:', id)

    useEffect(() => {
        const url = `https://reqres.in/api/users/${id}`;

        const config = {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        }
        axios.get(url, config)
            .then((response) => {
                setUser(response.data.data)
            })
            .catch(function (error) {
                console.log('This is Error', error)
            })

            .finally(() => {
                setLoading(false);
            });



    }, [id])

    console.log(user)

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh'
        }}>

            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', margin: 'auto', backgroundColor: 'rgba(228, 242, 252, 0.521)', width: '500px', height: '200px' }}>

                <div>
                    <Avatar sx={{ width: '120px', height: '120px' }} alt={user.first_name} src={user.avatar} />
                </div>
                <div>
                    <h2> @{user.first_name}</h2>
                    <p><strong>Last Name:</strong> {user.last_name}</p>
                    <p><strong>Email:</strong> {user.email}</p>

                </div>

            </div>
            </div>
            )

}
