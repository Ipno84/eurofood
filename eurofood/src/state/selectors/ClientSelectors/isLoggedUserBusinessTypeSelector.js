import { USER_TYPE_BUSINESS } from '../../../constants/ClientConstants';
import { createSelector } from 'reselect';
import getUserIdUserTypeSelector from './getUserIdUserTypeSelector';

export default createSelector([getUserIdUserTypeSelector], idUserType =>
    idUserType ? Number(idUserType) === USER_TYPE_BUSINESS : false
);
