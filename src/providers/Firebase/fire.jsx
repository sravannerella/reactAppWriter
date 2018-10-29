import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyAvXy09xK7013P8NTqziTp9eUb4DhlDnWk",
    authDomain: "profilepage-1ef09.firebaseapp.com",
    databaseURL: "https://profilepage-1ef09.firebaseio.com",
    projectId: "profilepage-1ef09",
    storageBucket: "profilepage-1ef09.appspot.com",
    messagingSenderId: "733416362999"
};

var fire = firebase.initializeApp(config);

export default fire;