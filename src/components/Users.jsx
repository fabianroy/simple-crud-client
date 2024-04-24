import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    const users = useLoaderData();

    const handleDeleteUser = _id => {
        console.log('delete', _id);

        fetch(`http://localhost:3000/users/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('User deleted successfully');
            }
        })
    }

    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => (
                        <div key={user._id}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <Link to={`/update/${user._id}`}><button>Update</button></Link>
                            <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default Users;