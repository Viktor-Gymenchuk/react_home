import { MAIN_URL, TOKEN } from './config';


export const api = {
    async fetchTask () {
        const response = await fetch(`${MAIN_URL}`, {
            Authorization: TOKEN,
            headers: {
                'Content-Type': 'application/json',
                Authorization:  TOKEN,
            },
            method: 'GET',
        });

        if (response.status !== 200) {
            throw new Error('Tasks were not loded');
        }
        const { data: tasks } = await response.json();

        return tasks;
    },

    async createTask (message) {
        const response = await fetch(MAIN_URL, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:  TOKEN,
            },
            body: JSON.stringify({
                message,
            }),
        });

        if (response.status !== 200) {
            throw new Error('Posts not create');
        }
        const { data: task } = await response.json();

        return task;
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
    async updateTask(id){
        const response = await fetch(`${MAIN_URL}/${id}`, {

            method:  'PUT',
            headers: {
                Authorization:  TOKEN,
            },
        });

        if (response.status !== 204) {
            throw new Error('Posts were not update');
        }
        const { data: task } = await response.json();
        return task;
    },
};
