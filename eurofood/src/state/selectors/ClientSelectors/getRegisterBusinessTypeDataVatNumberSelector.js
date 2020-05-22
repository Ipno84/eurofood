import { createSelector } from 'reselect';
import getRegisterBusinessTypeDataSelector from './getRegisterBusinessTypeDataSelector';

export default createSelector(
    [getRegisterBusinessTypeDataSelector],
    businessTypeData => String(businessTypeData.vat_number)
);
