import parseSpecificPrice from './parseSpecificPrice';

export default function parseProduct(product) {
    let id_default_image;
    let imageArr = product.id_image ? product.id_image.split('-') : null;
    if (imageArr) {
        id_default_image = imageArr[imageArr.length - 1];
    }
    return {
        ...product,
        id: Number(product.id_product),
        specific_prices: parseSpecificPrice(product.specific_prices),
        id_default_image
    };
}
