import { merge } from 'lodash';
import 'jquery';
import "./styles.css";

const oneObject = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
};

const twoObject = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
};

$(document).ready(function() {
    $('body').css('background', 'yellow');
    console.log(merge(oneObject, twoObject));
});