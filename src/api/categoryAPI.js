import { axiosClient } from './axiosClient';

const CategoryAPI = {
    getAll() {
        const url = `/categorys`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    add() {

    },
    remove(id) {

    },
    update(id) {

    }
}
export default CategoryAPI;