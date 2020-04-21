let instance = null;

class TreeItemsReferences {
    references = {};

    constructor(references) {
        if (!instance) instance = this;
        if (references) this.references = references;
        return instance;
    }

    addReference(ref) {
        this.references = {
            ...this.references,
            [ref.key]: ref.reference
        };
    }

    getReference(key = null) {
        const { references } = this;
        if (key && references && references[key]) return references[key];
        return null;
    }
}

export default TreeItemsReferences;
