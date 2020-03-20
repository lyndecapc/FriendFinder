//This file will hold the array of friends and will need to be exported.

var friendsSurveyData = [
    {
        name: "Lynde",
        imageUrl: "IMG_0959.jpg",
        surveyScores: [1,2,4,5,3,2,4,5,6,7]
    },
    {
        name: "Rudy",
        imageUrl: "IMG_0685.jpg",
        surveyScores: [5,3,4,2,1,3,2,5,2,3]
    },
    {
        name: "Missie",
        imageUrl: "IMG_0945.jpg",
        surveyScores: [2,2,3,4,5,1,2,3,4,5] 
    }
];

//Code to export array so data is accessible to other files via require.

module.exports = friendsSurveyData;