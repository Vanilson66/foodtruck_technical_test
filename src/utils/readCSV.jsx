import Papa from 'papaparse';

async function fetchCsv(fileName) {
    const response = await fetch(fileName);
    const csvData = await response.text();

    return new Promise((resolve, reject) => {
        Papa.parse(csvData, {
            header: true,
            complete: function(results) {
                resolve(results.data);
            },
            error: function(error) {
                reject(error);
            }
        });
    });
}

export default fetchCsv;
