import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email };
    console.log(user);

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if(data.insertedId) {
          alert('User added successfully');
          form.reset();
        }
      });
  }

  return (
    <>
      <h3>User Management System</h3>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder='name' /> <br />
        <input type="email" name="email" id="" placeholder='email' /> <br /><br />
        <input type="submit" value='Add User' name="" id="" />
      </form>

      <br />

      <Link to='/users'>Users</Link>
    </>
  )
}

export default App
