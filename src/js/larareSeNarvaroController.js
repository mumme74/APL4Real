/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.controller("larareSeNarvaroCtrl", function ($scope, larareNarvaroGetService) {
    $scope.years = [];
    $scope.start = 0;
    $scope.currentMonth = new Date().getMonth();
    $scope.currentYear = new Date().getFullYear();

    var anvandare = JSON.parse(localStorage.anvandare);
    var id_token = anvandare.id_token;
    larareNarvaroGetService.getGodkandNarvaro(id_token).then(function (data) {
        var alla = [];
        alla.push({elev_id: -1, namn: "Alla"});
        $scope.elever = alla.concat(data);
        $scope.getVeckor();
        for (var i = $scope.currentYear - 10; i <= $scope.currentYear; i++)
            $scope.years.push(i);
        $scope.years.reverse();
    });
    $scope.parseClass = function (p) {
        if (p === 0)
            return 'rod';
        else if (p === 1)
            return 'gul';
        else if (p === 2)
            return 'gron';
        else
            return 'vit';
    };
    $scope.todayClass = function (datum) {
        if (datum.getFullYear() === new Date().getFullYear()
                && datum.getMonth() === new Date().getMonth()
                && datum.getDate() === new Date().getDate()) {
            return 'idag';
        }
    };
    $scope.setStart = function (p) {
        $scope.start = p;
    };
    $scope.getElev = function (elev_id) {
        return $scope.elever[arrayObjectIndexOf($scope.elever, elev_id, "elev_id")];
    };
    $scope.getLjus = function (elev, datum) {
        var index = arrayObjectIndexOf(elev.narvaro, datum.getTime() / 1000, "datum");
        if (index !== -1)
        {
            return elev.narvaro[index].trafikljus;
        } else {
            return -1;
        }
    };
    $scope.getVeckor = function (elev_id, year, month) {
        if (elev_id > -1) {
            var elev = $scope.getElev(elev_id);
            var sista_dag = new Date(elev.narvaro[elev.narvaro.length - 1].datum * 1000);
            if (!month) {
                month = sista_dag.getMonth();
            }
            if (!year) {
                year = sista_dag.getFullYear();
            }
        }
        if (!(elev_id > -1) && !year)
        {
            year = $scope.currentYear;
        }
        if (!(elev_id > -1) && !month)
        {
            month = $scope.currentMonth;
        }
        //skapa array med datumen i månaden
        var start = new Date(year, month, 1);
        var stop = new Date(year, month, new Date(year, month + 1, 0).getDate());
        var date_array = getDates(start, stop);
        //Fyll på med tomma dagar så att arrayen börjar med söndag
        while (date_array[0].getDay() !== 0)
        {
            var ny_dag = date_array[0];
            date_array.unshift(ny_dag);
            date_array[0] = date_array[0].removeDays(1);
        }
        //fyll på så att den slutar på lördag
        while (date_array[date_array.length - 1].getDay() !== 0)
        {
            var ny_dag = date_array[date_array.length - 1];
            date_array.push(ny_dag);
            date_array[date_array.length - 1] = date_array[date_array.length - 1].addDays(1);
        }
        var narvaro_array = [];
        //skapa en objektarray av datumen
        for (var i = 0; i < date_array.length - 1; i++)
        {
            var dag = date_array[i];
            narvaro_array.push({
                datum: dag
            });
        }
        //lägg in dagarna veckovis i scope
        $scope.veckor = [];
        for (i = 0, j = narvaro_array.length; i < j; i += 7) {
            var temparray = narvaro_array.slice(i, i + 7);
            $scope.veckor.push(temparray);
        }
    };
});
function arrayObjectIndexOf(myArray, searchTerm, property) {
    for (var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm)
            return i;
    }
    return -1;
}

Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};
Date.prototype.removeDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() - days);
    return dat;
};
function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(currentDate);
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}