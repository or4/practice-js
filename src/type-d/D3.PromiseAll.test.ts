async function fetch(url: string): Promise<string> {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(`data: ${url}`);
        }, 0);
    });
}

function promiseAll(urls: string[]) {
    return new Promise((resolve, reject) => {
        const output: string[] = [];

        for (let index = 0; index < urls.length; index++) {
            fetch(urls[index])
                .then(data => {
                    output[index] = data;

                    if (output.length === urls.length) {
                        resolve(output);
                    }
                })
                .catch(reason => {
                    reject(reason);
                });
        }
    });
}

describe('Promise all', () => {
    it('should work', async () => {
        const result = await promiseAll(['url1', 'url2']);
        expect(result).toEqual(['data: url1', 'data: url2']);
    });
});
