/* eslint-disable no-console */
const ajaxRequest = (endPoint, target) => {
    $.ajax({
        url: endPoint,
        dataType: 'json'
    })
        .done((data) => {
            import(
                /* webpackChunkName: "slick" */
                /* webpackMode: "lazy" */
                './slick'
                ).then(() => {
            });
            data.map((currentVal) => {
                $(`.${ target }`).append(`<a style="padding: 10px;" href="${currentVal.html_url}"<li>${currentVal.description}</li></a>`)
            });
        });
};

module.exports = ajaxRequest;