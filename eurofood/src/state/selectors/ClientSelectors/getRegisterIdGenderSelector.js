import { createSelector } from 'reselect';
import getRegisterFormSelector from './getRegisterFormSelector';

export default createSelector(
    [getRegisterFormSelector],
    registerForm => registerForm.id_gender
);
