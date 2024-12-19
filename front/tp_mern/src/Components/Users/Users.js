import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DeleteUsers from "./DeleteUsers";

const Users = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8080/users", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des utilisateurs :", error);
            });
    }, []);

    const handleUserUpdate = (user) => {
        navigate(`/user_update/${user._id}`);
      };

    const handleDelete = (userId) => {
        setUsers(users.filter((users) => users._id !== userId));
    };

    return (
        <div>
            <h1>Liste des Utilisateurs</h1>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <button onClick={() => handleUserUpdate(user)}>Modifier</button>
                        <DeleteUsers userId={user._id} onDelete={handleDelete} />
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate('/products')}>Voir les Annonces</button>
        </div>
    );
};

export default Users;
