import { MAIN_URL, TOKEN } from './config';


export const api = {
    async fetchTasks () {
        const response = await fetch(`${MAIN_URL}?page=1`, {
            Authorization: TOKEN,
            headers: {
                'Content-Type': 'application/json',
                Authorization:  TOKEN,
            },
            method: 'GET',
        });

        if (response.status !== 200) {
            throw new Error('Posts were not loded');
        }
        const { data: posts } = await response.json();

        return posts;
    },
    async createTask (comment) {
        const response = await fetch(MAIN_URL, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:  TOKEN,
            },
            body: JSON.stringify({
                comment,
            }),
        });

        if (response.status !== 200) {
            throw new Error('Posts not create');
        }
        const { data: post } = await response.json();

        return post;
    },
    async removeTask (id) {
        const response = await fetch(`${MAIN_URL}/${id}`, {
            method:  'DELETE',
            headers: {
                Authorization:  TOKEN,
            },
        });

        if (response.status !== 204) {
            throw new Error('Posts were not delete');
        }

    },
    async updateTask(tasks){
        const response = await fetch(`${MAIN_URL}`, {
            method:  'POST',
            headers: {
                Authorization:  TOKEN,
            },
        });

        if (response.status !== 204) {
            throw new Error('Posts were not update');
        }

    },
};
