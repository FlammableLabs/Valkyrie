var GetBetween = function (start, end, content) {
    return content.split(start).pop().split(end)[0];
}

module.exports = {
    GetBetween: GetBetween
};