import { createSelector } from 'reselect';
import getUserActiveSelector from './getUserActiveSelector';

export default createSelector([getUserActiveSelector], active =>
    Boolean(active)
);
