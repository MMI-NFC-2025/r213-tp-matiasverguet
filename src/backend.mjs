import PocketBase from 'pocketbase';

export const PB_URL = "http://127.0.0.1:8090/";

const db = new PocketBase(PB_URL);

export async function getOffres() {
    try {
        let data = await db.collection('Maisons').getFullList({
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
        return db.files.getUrl(record, recordImage);
    } catch (err) {
        console.error('getImageUrl error', err);
        return null;
    }
}

export async function getOffre(id) {
    try {
        const data = await db.collection('Maisons').getOne(id);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return null;
    }
}

export async function addOffre(house) {
    try {
        await db.collection('maison').create(house);
        return {
            success: true,
            message: 'Offre ajoutée avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant la maison', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant la maison'
        };
    }
}

export async function getAgent(id) {
    try {
        const data = await db.collection('Agent').getOne(id);
        return data;
    } catch (err) {
        // collection or record may not exist
        return null;
    }
}

export async function getAgents() {
    try {
        const list = await db.collection('Agent').getFullList({ sort: '-created' });
        return list;
    } catch (err) {
        console.error('getAgents error', err);
        return [];
    }
}