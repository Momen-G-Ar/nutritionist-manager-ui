import './add-person-info.css';

import React from 'react';

import Input from '../../common/input/input';
import { Select } from 'antd';

const optionsOfSelect = [
    {
        value: 'Hebron',
        label: 'Hebron',
    },
    {
        value: 'Jerusalem',
        label: 'Jerusalem',
    },
    {
        value: 'Bethlehem',
        label: 'Bethlehem',
    },
    {
        value: 'Amman',
        label: 'Amman',
    },
];

/**
 * To take the person information and send it to the form
 * @param {{
 *  setSelectedCity:React.Dispatch<React.SetStateAction<string>>
 * }} props 
 * @returns 
 */
const AddPersonInfo = (props) => {

    return (
        <div className='addNewPerson'>
            <h3>
                person info
            </h3>
            <div className='inputInForm'>
                <Input
                    name='name'
                    label='Name'
                    required
                />
                <Input
                    type={'number'}
                    name='phone'
                    label='phone'
                    required
                />
                <Input
                    type={'email'}
                    name='email'
                    label='email'
                    required
                />
                <Input
                    className='datePicker'
                    type={'date'}
                    name='dater'
                    label='birth date'
                    required
                    style={{ width: 250 }}
                />
                <div className='selectInPersonInfo'>
                    <label>
                        <span>City</span>
                        &nbsp;
                        <span>*</span>
                    </label>
                    <Select
                        onChange={value => props.setSelectedCity(value)}
                        defaultValue="Hebron"
                        style={{ width: 275, height: 32 }}
                        options={optionsOfSelect}
                    />
                </div>
            </div>
        </div>

    );
};

export default AddPersonInfo;