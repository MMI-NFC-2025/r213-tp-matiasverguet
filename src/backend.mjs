import PocketBase from 'pocketbase';

// PocketBase server base URL (adjust if your server runs elsewhere)
export const PB_URL = "http://http://127.0.0.1:8090/_/";

const db = new PocketBase(PB_URL);

export async function getOffres() {
    try {
        let data = await db.collection('maison').getFullList({
            sort: '-created',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}

export async function getImageUrl(record, recordImage) {
    try {
        if (!record || !recordImage) return null;

        // recordImage is expected to be a filename (string)
        const filename = encodeURIComponent(recordImage);

        // PocketBase serves files at /api/files/{collection}/{recordId}/{filename}
        // Use collectionId when available, otherwise fall back to the collection name 'maison'
        const collection = record.collectionId || record.collectionName || 'maison';

        return `${PB_URL}/api/files/${collection}/${record.id}/${filename}`;
    } catch (err) {
        console.error('getImageUrl error', err);
        return null;
    }
}