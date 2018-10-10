export const Auth = {
    isAuthenticated: JSON.parse(localStorage.getItem('authenticated')),
    authenticate(cb){
        let val = JSON.parse(localStorage.getItem('authenticated'));
        console.log(val);
        if(val === null || val){
            this.isAuthenticated = true;
            localStorage.setItem('authenticated', true);
        } else {
            this.isAuthenticated = false;
        }
        cb(this.isAuthenticated);
    },
    signout(cb){
        localStorage.removeItem('authenticated');
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}