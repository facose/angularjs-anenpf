class HomeCtrl {
  constructor($scope) {
    // Declarating array of people objects
    $scope.people = [];

    // Method for adding new people. Check input fields on html for reference on addName and addLastName.
    $scope.add = () => {
      $scope.people.push({
        name: `${$scope.addName}`,
        lastName: `${$scope.addLastName}`
      });

      // Clearing the input boxes after pushing new obj to array
      $scope.addName = "";
      $scope.addLastName = "";
    };

    // Method to remove specific elements from array. Index sent from home view.
    $scope.remove = index => {
      $scope.people.splice(index, 1);
    };
  }
}

export default HomeCtrl;
