export const fetchCall = (endpoint = '', body = {}, method = 'get', abortController) => {
    const abortCtrl = abortController || new AbortController();
    let options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        signal: abortCtrl.signal,
        mode: "cors"
    };

    if (method.toLowerCase() === 'post')
        options.body = JSON.stringify(body);

    return new Promise((resolve, reject) => {
        fetch(`${endpoint}`, { ...options })
            .then(response => {
                const respClone = response.clone();
                if (response.ok)
                    response.json()
                        .then(data => resolve(data?.body || data))
                        .catch(error => {
                            return respClone.text();
                        })
                            .then(responseText => resolve(responseText))
                else
                    response.json()
                        .then(error => reject(error))
                        .catch(error => respClone.text()
                            .then(responseText => reject(responseText)))

            })
            .catch(error => {
                if (error.name === 'AbortError') return;
                return reject(error)
            })
    })
}



