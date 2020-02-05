import { API } from '../configs/api';

export function getShipments(pagenumber, filters) {
    let urlFilters = '';

    if (filters?.id) {
        urlFilters += `&id=${filters.id}`;
    }

    if (filters?.sort) {
        urlFilters += `&_sort=${filters.sort}`;
    }

    if (filters?.order) {
        urlFilters += `&_order=${filters.order}`;
    }

    const url = `/shipments?_page=${pagenumber || 1}&_limit=20${urlFilters}`;

    return new Promise((resolve, reject) => {
        API.get(url)
            .then(res => resolve(res?.data || res))
            .catch(error => reject(error?.response?.data || error));
    });
}


export function updateShipment(id, payload) {
    return new Promise((resolve, reject) => {
        API.patch(`/shipments/${id}`, payload)
            .then(res => resolve(res?.data || res))
            .catch(error => reject(error?.response?.data || error));
    });
}