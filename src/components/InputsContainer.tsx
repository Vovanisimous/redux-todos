import React, { ChangeEvent, useState } from "react";

const InputsContainer = () => {
    const [values, setValues] = useState<string[]>([]);

    const addInput = () => {
        values.push("");
        setValues([...values]);
    };

    const deleteInput = (index: number) => {
        const copy = [...values];
        copy.splice(index, 1);
        setValues(copy);
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        values[index] = event.target.value;
        setValues([...values]);
    };

    return (
        <div className={"todos-container"}>
            <button onClick={addInput}>Add input</button>
            {values.map((item, index) => (
                <div key={index}>
                    <input value={item} onChange={(e) => onChange(e, index)} />
                    <button onClick={() => deleteInput(index)}>Delete input</button>
                </div>
            ))}
        </div>
    );
};

export default InputsContainer;
