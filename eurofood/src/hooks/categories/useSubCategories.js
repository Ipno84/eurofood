import generateArrayChunk from '../../helpers/generateArrayChunk';
import getAssociatedCategoriesSelector from '../../state/selectors/CategoriesSelectors/getAssociatedCategoriesSelector';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function useSubCategories(id, chunkCount = 10) {
    const [items, setItems] = useState([]);
    const subCategories = useSelector(state =>
        getAssociatedCategoriesSelector(state, id)
    );
    const chunked = generateArrayChunk(subCategories, chunkCount);
    const itemsArray = subCategories
        ? subCategories.filter(e => {
              if (typeof 'string' || typeof 'number') return true;
          })
        : [];
    const onCategoriesEndReached = props => {
        console.log(props);
    };
    return { subCategories, onCategoriesEndReached };
}
