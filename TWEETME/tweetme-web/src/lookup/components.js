
export function loadTweets(callback) {
    const xhr = new XMLHttpRequest()
    const method = 'GET'
    const url = "http://localhost:8080/api/tweets/"
    xhr.responseType = "json"
    xhr.open(method, url)
    xhr.onload = function () {
        callback(xhr.response,xhr.status)
    }
    xhr.onerror = function (e){
        callback({"message":"The Request was an error"},400)
    }
    xhr.send()
}