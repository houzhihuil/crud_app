// Filename - Home.js
import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import produits from './produits';
 
import { Link, useNavigate } from 'react-router-dom';
  
function Home() {
  
    let history = useNavigate()
  
    // You may skip this part if you're
    // using react-context api or redux
    function setID(id, description, prix) {
        localStorage.setItem('id', id);
        localStorage.setItem('description', description);
        localStorage.setItem('prix', prix);
    }
  
    // Deleted function - functionality 
    // for deleting the entry
     function deleted(id) {
  
        var index = produits.map(function (e) { 
            return e.id; }).indexOf(id);
  
        // deleting the entry with index
        produits.splice(index, 1)  
  
        // We need to re-render the page for getting 
        // the results so redirect to same page.
        history('/')
    }
  
    return (
        <div style={{ margin: '10rem' }}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>description</th>
                        <th>prix</th> 
                    </tr>
                </thead>
                <tbody> 
                    {produits.map((item) => {
                        return (
                            <tr>
                                <td>{item.description}</td>
                                <td>{item.prix}</td> 
                                {/* getting theirname, and 
                                    age for storing these
                                    value in the jsx with 
                                    onclick event */}
                                <td><Link to={`/edit`}>
                                    <Button onClick={(e) =>
                                    setID(item.id, item.description, item.prix)} 
                                    variant="info">
                                    Update</Button></Link>
                                </td>
  
                                {/* Using the deleted function passing
                                    the id of an entry */}
                                <td><Button onClick={e => deleted(item.id)}
                                    variant="danger">Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
  
            {/* Button for redirecting to create page for
                insertion of values */}
            <Link className="d-grid gap-2" to='/create'>
                <Button variant="warning" size="lg">Create</Button>
            </Link>
        </div>
    )
}
  
export default Home