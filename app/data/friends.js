//This file will hold the array of friends and will need to be exported.

var friends = [
    {
        name: "Lynde",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fuuathletics.com%2Fhof.aspx%3Fhof%3D74&psig=AOvVaw3T-iRzI-4jOXZFJnFggcr4&ust=1584830886408000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICU16qRqugCFQAAAAAdAAAAABAD",
        scores: [1,2,4,5,3,2,4,5,6,7]
    },
    {
        name: "Erin Stute",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Ferinstute%2F&psig=AOvVaw1p6x0GXQJnRn38VyGat2MV&ust=1584830924361000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLD8kbSRqugCFQAAAAAdAAAAABAD",
        scores: [2,5,4,3,3,3,3,3,3,3]
    },
];

//Code to export array so data is accessible to other files via require.

module.exports = friends;