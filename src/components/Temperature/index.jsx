import React, { useState } from 'react';

const Temperature = () => {
    const [temperature, setTemperature] = useState(0);

    const handleInputChange = (event) => {
        setTemperature(Number(event.target.value));
    };

    return (
        <div>
            <h1>Verifique a Temperatura</h1>
            <input
                type="number"
                placeholder="Digite a temperatura"
                value={temperature}
                onChange={handleInputChange}
            />
            <p>{temperature > 25 ? 'Está quente!' : 'Está frio!'}</p>
        </div>
    );
};

export default Temperature;
