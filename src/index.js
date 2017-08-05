import 'babel-polyfill';
import 'jquery';
import './styles.scss';

const oneObject = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
};

const twoObject = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
};

/* eslint-disable no-undef, no-console */
const getGists = () => {
    //dynamically import
    return import(
        /* webpackChunkName: "ajax" */
        /* webpackMode: "lazy" */
        './ajax'
        ).then((ajaxRequest) => {
        let endPoint = 'https://api.github.com/users/toklok/gists';
        let ulClass = 'abracadabra';
        $('body').append(`<ul style="display: flex; flex-direction: column;" class="${ ulClass }"></ul>`);
        ajaxRequest(endPoint, ulClass);
    }).catch((err) => {
        //error
    });
};

$(document).ready(() => {
    $('body').css('background', 'yellow');
    //bring in momentjs
    import(
        /* webpackChunkName: "moment" */
        'moment'
        ).then((moment) => {
        moment.locale('cs');
        console.log(moment.locale()); // cs
        console.log(moment());
    });
    //set timeout 10 seconds after page load, import lodash, and ajax request
    setTimeout(() => {
        import (
            /* webpackChunkName: "lodash" */
            /* webpackMode: "lazy" */
            'lodash').then( _ => {
            console.log(_.merge(oneObject, twoObject));
        }).catch((err) => {
            //error
        });
        //kick off ajax request
        getGists();
    }, 10000);
});