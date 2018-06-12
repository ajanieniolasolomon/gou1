//const functions = require('firebase-functions');
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions'


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
//exports.helloWorld = functions.https.onRequest((request, response) => {
//    response.send("Hello from Firebase!");
//});
const serviceAccount = require('../ajax-a642a-firebase-adminsdk-26ili-8e9ed7e30b.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ajax-a642a.firebaseio.com'
});
import * as crypto from 'crypto';
import * as qs from 'querystring';
import axios from 'axios';
import * as CORS from 'cors';
const cors = CORS({ origin: true });
const redirect_uri  = ' http://localhost:4200/redirect';
const client_id = "a3a85ea7eb3d3f26a568f0ffacca2464a5c736a601721f7a07c963d71e67f168";
const client_secret = "b8dea8d60fb57538d143d2eb86623f06aec8c55898d0e8264f2c6fb688cbe3fe";
const defaultParams = { 
    client_id, 
    client_secret, 
    redirect_uri
}
exports.redirect = functions.https.onRequest((req, res) => {
    const base = 'https://www.coinbase.com/oauth/authorize?';
    const queryParams = { 
        ...defaultParams,
        response_type: 'code',
        scope: 'wallet:accounts:read',
        state: crypto.randomBytes(20).toString('hex')
    }
    const endpoint = base + qs.stringify( queryParams )
    res.redirect(endpoint);  
});