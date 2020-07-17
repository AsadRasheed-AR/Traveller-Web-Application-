
// Functions to Send Request to server , fetch data and then update the UI dynamically

// Request to server
const getRequest = async (url = '', data) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    try {
        const newData = await response.json();
        Client.closeResponseModal();
        updateUI(newData.data)
        Client.openResultModal()
        console.log(newData)
    } catch (error) {
        console.log(error)
    }
}

// Function to generate table for result dynamically
const updateUI = async (recData) => {

        let col = [];
        for (let i = 0; i < recData.length; i++) {
            for (var key in recData[i]) {
                // Some Modification
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        let table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        let tr = table.insertRow(-1);                   // TABLE ROW.

        for (let i = 0; i < col.length; i++) {
            let th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (let i = 0; i < recData.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = recData[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        let divContainer = document.getElementById("entryHolder");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        return true
    }

export { getRequest }
