import fetch from 'isomorphic-fetch';

// * snip *

export function createBlogPost(data) {
    return fetch('http://localhost:5000/api/fields', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}