
// The code should be written in the frontend/src/Delete.jsx file.

import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 8px;
    background-color: #f4f4f4;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    `;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    `;
const Input = styled.input`
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    `;
const Button = styled.button`
    padding: 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0056b3;
    }
    `;
const Label = styled.label`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
    `;

const Delete = () => {
    const [formData, setFormData] = useState({
        name: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`http://localhost:5000/api/faculty/${formData.name}`);
            console.log('Student data deleted successfully');
            alert('data deleted successfully');
        } catch (error) {
            console.error('Error deleting student data:', error);
            alert('Error deleting student data');
        }
    };

    return (
        <FormContainer>
            <p style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Delete Form</p>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="name">Name</Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Button type="submit">Delete</Button>

            </Form>
        </FormContainer>
    );
};

export default Delete;
