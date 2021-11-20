const { REACT_APP_GOOGLE_API_KEY, REACT_APP_CLIENT_ID } = process.env;

const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

const initClient = () => {
    gapi.client.init({
        apiKey: REACT_APP_GOOGLE_API_KEY,
        clientId: REACT_APP_CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).catch(error => console.log("GOOGLE API ERROR: ", { error }))
}

export const handleClientLoad = () => {
    console.log("called handleClient!");
    gapi.load('client:auth2', initClient);
    // getData()
}

export const getData = () => {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1AFb4McZ-NngKiD5WFk_K9hIMfreEjLN40z5sJ_PwFKI',
        range: '1!A1:E',
    }).then((response: any) => {
        console.log(response)
        // if (range.values.length > 0) {
        // appendPre('Name, Major:');
        // for (i = 0; i < range.values.length; i++) {
        // var row = range.values[i];
        // Print columns A and E, which correspond to indices 0 and 4.
        // appendPre(row[0] + ', ' + row[4]);
        // }
        // } else {
        // appendPre('No data found.');
        // }
    }).catch((error) => console.log(error))
}