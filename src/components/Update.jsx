import { Link, useLoaderData } from "react-router-dom";

const Update = () => {

    const user = useLoaderData();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updatedUser = {name, email};

        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser),
    
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('Updated Successfully');
            }
        })
    }

    return (
        <div>
            <h3>Update information of {user.name}</h3>

            <form onSubmit={handleUpdate}>
                <input type="text" defaultValue={user.name} name="name" id="" /> <br />
                <input type="email" defaultValue={user.email} name="email" id="" /> <br />
                <input type="submit" value='Update Info' name="" id="" />
            </form>
            <br />
            <Link to='/'>Home</Link>
        </div>
    );
};

export default Update;