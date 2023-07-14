import './add-food-form.css';

import React from 'react';
import Input from '../../common/input/input';
import { Button } from 'antd';

/**
 * Form to add food to the foodTable
 * @param {{
 * handleAddFood: (e: React.FormEvent<HTMLFormElement>) => void
 * }} props 
 * @returns 
 */
const AddFoodForm = (props) => {
    return (
        <div className="addNewFood">
            <form onSubmit={props.handleAddFood}>
                <div className='inputInForm'>
                    <Input
                        name='name'
                        label='Name'
                        required
                    />
                    <Input
                        name='image'
                        label='image src'
                        type={'text'}
                        required
                    />
                    <Input
                        type={'number'}
                        name='amount'
                        label='amount'
                        required
                    />
                    <Input
                        type={'number'}
                        name='calories'
                        label='calories'
                        required
                    />
                </div>
                <div className="buttonInForm">
                    <Button
                        htmlType="submit"
                        type='primary'
                    >
                        Add
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddFoodForm;