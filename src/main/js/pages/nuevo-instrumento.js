const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');


const NevoInstrumentoPage = () => {

    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descripcion, setDescripcion] = useState('')
    
    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/instrumentos',
            entity: {nombre: nombre, categoria: categoria, descripcion: descripcion},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }
    return(
        <>
        <h1>Nuevo Instruemnto</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type="text" id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)} /> <br />
            
            <label>Categoria</label> <br />
            <input type="text" id='categoria' name='categoria' onChange={e=>setCategoria(e.target.value)} /> <br />
            
            <label>Descripcion</label> <br />
            <input type="text" id='descripcion' name='descripcion' onChange={e=>setDescripcion(e.target.value)} /> <br />
            
            <input type="submit" value="Nuevo Instruemnto" />
        
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NevoInstrumentoPage;