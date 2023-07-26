const addProgram = (program) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/program/addProgram`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(program),
    })
        .then(async (response) => {
            return await response.json();
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
};
/**
 * 
 * @param {String} searchTerms 
 * @returns 
 */
const getPrograms = (searchTerms) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/program/getPrograms${searchTerms?`?searchTerms=${searchTerms}`:``}`, {
        method: "GET",
    })
        .then(async (response) => {
            return await response.json();
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
};

/**
 * 
 * @param {String} programsId 
 */
const deleteProgram = (programId) => {
    console.log({programId});
    return fetch(`${process.env.REACT_APP_SERVER_URL}/program/deleteProgram/${programId}`, {
        method: "DELETE",
    })
        .then(async (response) => {
            return await response.json();
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
}

// eslint-disable-next-line
export default {
    addProgram,
    getPrograms,
    deleteProgram,
};
