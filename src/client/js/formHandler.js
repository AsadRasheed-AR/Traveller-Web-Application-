// Handle submit funtion performs two operations
// 1- If mode = URL then perform validation
// 2- Send get request to Server


function handleSubmit(event) {
    const reqType = event.target.parentNode.parentNode.parentNode.id;

    const el = event.target.parentNode.parentNode.parentNode;
    const inp_typ = el.querySelector('.input_type').value;
    const text_url = el.querySelector('.t_r_input').value;

    //Input Validation

    if (text_url == "") {
        return
    }
    else if ((inp_typ == "URL") && !validation(text_url)) {
        event.preventDefault()
        Client.openErrorModal('Error !!' , Client.errorImg , 'Please Enter a valid URL or check input type.')
        return
    }
    else {
        event.preventDefault()
        Client.openErrorModal('Processing !!' , Client.responseImg , 'Please Wait While your request is being Processed!')
        makeRequest(reqType)
    }
}

// Funtion for URL Validation (Regex)
function validation(value) {
    console.log('Verifying')
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}


// Function to send request to server as per input
function makeRequest(reqType) {
    const elmnt = document.getElementById(reqType);
    let reqParams = {};
    switch (reqType) {
        case "Classification":
            // Read form fields and then fire getRequest to server
            reqParams[(elmnt.querySelector('.input_type').value).toLowerCase()] = elmnt.querySelector('.t_r_input').value;

            console.log(reqParams)
            Client.getRequest('/Classification', reqParams)
            break;

        case "Classification_T":
            // Read form fields and then fire getRequest to server
            reqParams[(elmnt.querySelector('.input_type').value).toLowerCase()] = elmnt.querySelector('.t_r_input').value;
            reqParams['taxonomy'] = elmnt.querySelector('#contentType').value == '1' ? 'iptc-subjectcode' : 'iab-qag';

            console.log(reqParams)
            Client.getRequest('/Classification_Taxonomy', reqParams)

            break;

        case "Sentiment_Analysis":
            // Read form fields and then fire getRequest to server
            reqParams[(elmnt.querySelector('.input_type').value).toLowerCase()] = elmnt.querySelector('.t_r_input').value;
            reqParams['mode'] = elmnt.querySelector('#mode').value == '1' ? 'tweet' : 'document';

            console.log(reqParams)
            Client.getRequest('/sentiment_Analysis', reqParams)

            break;

        case "Summarization":
            // Read form fields and then fire getRequest to server
            reqParams[(elmnt.querySelector('.input_type').value).toLowerCase()] = elmnt.querySelector('.t_r_input').value;
            reqParams['sentences_number'] = elmnt.querySelector('#sentences_number').value == '' ? 3 : elmnt.querySelector('#sentences_number').value;

            console.log(reqParams)
            Client.getRequest('/Summarization', reqParams)
            break;

    }
}

export { handleSubmit , validation }
