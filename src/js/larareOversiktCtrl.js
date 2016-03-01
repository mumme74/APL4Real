module.controller("larareSeNarvaroCtrl", function ($scope, larareOversiktService, larareService) {
    $scope.years = [];
    $scope.start = 0;
    $scope.currentMonth = new Date().getMonth();
    $scope.currentYear = new Date().getFullYear();

    var anvandare = JSON.parse(localStorage.anvandare);
    var id_token = anvandare.id_token;
    larareService.getKlasser(id_token).then(function (data) {
        $scope.klasser = data;
    });
    $scope.getElever = function (klass_id) {
        larareOversiktService.getOmdome(id_token, klass_id).then(function (data) {
            var alla = [];
            alla.push({elev_id: -1, namn: "Alla"});
            $scope.elever = alla.concat(data);
        });
    };
});

var myPieChart = new Chart(ctx[0]).Pie(data,options);
var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];

