import { createSelector } from 'reselect';
import getRegisterBusinessTypeDataSelector from './getRegisterBusinessTypeDataSelector';

export default createSelector(
    [getRegisterBusinessTypeDataSelector],
    businessTypeData => businessTypeData.company
);
