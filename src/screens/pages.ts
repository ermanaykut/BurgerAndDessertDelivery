import BottomNavigator from "../router/bottom-navigator";
import { Burgers } from "./Bottom";
import { Login, Register, BurgerDetail, DessertDetail } from "./Stack";


enum NAMES {
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    BURGERDETAIL = 'BURGERDETAIL',
    DESSERTDETAIL = 'DESSERTDETAIL',
    BOTTOM = 'BOTTOM',
    BURGERS = 'BURGERS'
}

export const PAGES : {
    [name in NAMES]:{
        name: string;
        component: any;
        options? : any;
    };
} = {
    [NAMES.LOGIN]:{
        name: 'Login',
        component: Login
    },
    [NAMES.REGISTER]:{
        name: 'Register',
        component : Register
    },
    [NAMES.BURGERDETAIL]:{
        name: 'BurgerDetail',
        component : BurgerDetail
    },
    [NAMES.DESSERTDETAIL]:{
        name: 'DessertDetail',
        component : DessertDetail
    },
    [NAMES.BOTTOM]:{
        name: 'BottomNavigator',
        component: BottomNavigator
    },
    [NAMES.BURGERS]:{
        name: 'Burgers',
        component: Burgers
    },
}