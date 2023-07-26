import './input.css';

import React from 'react';

/**
 * Renders an input element.
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 *  label?: string;
 * }} props 
 */
const Input = (props) => {
    const { label, ...inputProps } = props;
    return (
        <div className="inputGroup">
            {
                label ? (
                    <label>
                        <span>{label}</span>
                        &nbsp;
                        {inputProps.required && <span>*</span>}
                    </label>
                ) : null
            }
            <input {...inputProps} />
        </div>
    );
};

export default Input;