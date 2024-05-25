import React from 'react';

interface Input {
    id: string,
    type: string,
    label: string,
    placeholder: string,
}

function FormGenerator({ inputs }: { inputs: Input[] }) {
    return (
        <div>
            {
                inputs.map((input, index) => (
                    <div key={index} className="mb-3">
                        <label htmlFor={input.id} className='form-label' style={{ width: '100%' }}>{input.label}</label>
                        <input type={input.type} id={input.id} placeholder={input.placeholder} className="form-control" />
                    </div>
                ))
            }
        </div>
    );
}

export default FormGenerator;