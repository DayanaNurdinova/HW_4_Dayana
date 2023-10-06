import React, { useState } from 'react';
import './App.css'; // Создайте файл App.css для стилей

function App() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь вы можете выполнить дополнительные действия, например, отправить данные на сервер.
        // В данном примере мы просто выводим данные в консоль.
        console.log('Отправленная форма:', formData);
    };

    return (
        <div className="App">
            <div className="container">
                <h1>Регистрация пользователя</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">ФИО:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Номер телефона:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email адрес:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default App;
