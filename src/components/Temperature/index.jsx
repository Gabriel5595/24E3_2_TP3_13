import React, { useState } from 'react';

const Temperature = () => {
    const [temperature, setTemperature] = useState(0);

    return (
        <div>
            <h1>Verifique a Temperatura</h1>
            <input
                type="number"
                placeholder="Digite a temperatura"
                value={temperature}
                onChange={(event) => setTemperature(event.target.value)}
            />
            <p>{temperature > 25 ? 'Está quente!' : 'Está frio!'}</p>
        </div>
    );
};

export default Temperature;
