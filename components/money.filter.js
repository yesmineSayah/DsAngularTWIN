function moneyFN() {
    return function (input, param) {
        if (input != null) {
            if (param == "usd") {
                return (input * 0.4) + "$";
            } else if (param == "eur") {
                return (input * 0.44) + "£";
            }
        }
    }
}
angular
    .module('dsApp')
    .filter('money', moneyFN);
