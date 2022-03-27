<<<<<<< HEAD
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const userApi = {
    getMe: () => {
        // TODO: Call API to get current user
        return new Promise((resolve, reject) => {
            // reject(new Error('MY CUSTOM ERROR'));
            // return;

            // Wait 500ms --> return result
            // console.log(currentUser.displayName)
            setTimeout(() => {
                const currentUser = firebase.auth().currentUser;

                resolve({
                    id: currentUser.uid,
                    name: currentUser.displayName,
                    email: currentUser.email,
                    photoUrl: currentUser.photoURL,
                })
            }, 500);
        })
    }
}

export default userApi;
=======
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const userApi = {
    getMe: () => {
        // TODO: Call API to get current user
        return new Promise((resolve, reject) => {
            // reject(new Error('MY CUSTOM ERROR'));
            // return;

            // Wait 500ms --> return result
            setTimeout(() => {
                const currentUser = firebase.auth().currentUser;

                resolve({
                    id: currentUser.uid,
                    name: currentUser.displayName,
                    email: currentUser.email,
                    photoUrl: currentUser.photoURL,
                })
            }, 1000);
        })
    }
}

export default userApi;
>>>>>>> 21529431cc780417d835169c1cba16038b4fc71f
