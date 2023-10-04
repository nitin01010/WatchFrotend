import React, { useState } from 'react';
import Footer from './Footer';

const Contact = () => {
    const [form, setform] = useState({
        name: '',
        email: '',
        number: ''
    });
    const handler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setform(values => ({ ...values, [name]: value }));
    }

    const Handlersubmit = (event) => {
        event.preventDefault();
        alert(`Interested in our exclusive timepieces? Reach out now to explore luxury redefined. ${form.name}`);
        fetch("https://watchbackend.onrender.com/api", {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
        <div className='ContainerAbout'>
            <span>
                <h1>Contact</h1>
            </span>
            <br />
            <span className='formBox'>
                <form>
                    <input type='text' name='name' onChange={handler} value={form.name} placeholder='Enter name' /> <br /><br />
                    <input type='text' name='email' onChange={handler} value={form.email} placeholder='Enter email' /> <br /><br />
                    <input type='text' name='number' onChange={handler} value={form.number} placeholder='Phone Number' /> <br /><br />
                    <button className='btn' onClick={Handlersubmit}>Send</button>
                </form>
            </span>
        </div>
    );
}

export default Contact;
