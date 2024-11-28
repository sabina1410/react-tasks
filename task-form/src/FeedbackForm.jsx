import React, { useState } from 'react';

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && message) {
            setSuccess(true);
          
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ad" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea placeholder="Mesaj" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Göndər</button>
            </form>
            {success && <p>Məlumatınız göndərildi</p>}
        </div>
    );
};

export default FeedbackForm;
