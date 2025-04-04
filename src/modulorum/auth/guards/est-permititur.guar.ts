import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

const estPermititurGuar = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized, 
    next: NavigationGuardNext
) => {

    const userId = localStorage.getItem('userId');

    localStorage.setItem('lastPath', to.path);

    if(!userId) {
        return next({
            name: 'login'
        });
    }

    return next();

}

export default estPermititurGuar;