import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getAssociatedCategoriesCountSelector from '../../state/selectors/CategoriesSelectors/getAssociatedCategoriesCountSelector';
import getAssociatedChunkedCategoriesSelector from '../../state/selectors/CategoriesSelectors/getAssociatedChunkedCategoriesSelector';
import getMissingCategoriesAction from '../../state/actions/CategoriesActions/getMissingCategoriesAction';

export default function useSubCategories(id, chunkCount = 0) {
    const dispatch = useDispatch();

    const getMissingCategories = useCallback(
        ids => dispatch(getMissingCategoriesAction(ids)),
        [dispatch]
    );

    const [count, setCount] = useState(chunkCount);
    const subCategories = useSelector(state =>
        getAssociatedChunkedCategoriesSelector(state, id)
    );
    const subCategoriesCount = useSelector(state =>
        getAssociatedCategoriesCountSelector(state, id)
    );
    const currentChunk = subCategories[count];
    const previousCategories = subCategories
        .slice(0, count + 1)
        .flat()
        .filter(e => typeof e === 'object');
    const currentChunkMissing = currentChunk
        ? currentChunk.filter(e => typeof e !== 'object')
        : [];
    if (currentChunkMissing.length !== 0)
        getMissingCategories(currentChunkMissing);
    const isCategoriesChunking =
        subCategoriesCount !== previousCategories.length;

    const onCategoriesEndReached = () => {
        if (currentChunkMissing.length === 0) {
            setCount(count + 1);
        }
    };
    return {
        subCategories: previousCategories,
        onCategoriesEndReached,
        isCategoriesChunking
    };
}
