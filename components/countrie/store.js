const csvFilePath ='./public/mocked database/BLI_28032019144925238.csv'
const csv=require('csvtojson');


function sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'ascendente') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'decreciente') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}

const parseador = (value1, value2)=>{
    return  csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        let countries = [];
        jsonObj.filter((data)=>{
            if(parseFloat(data.Value) >= value1 && parseFloat(data.Value) <= value2)
            countries.push({"Country": data.Country, "Value": parseFloat(data.Value)})
        })
        return countries;
    })
    }

const listCountries = (value1,value2)=>{
    return new Promise((resolve, reject) => {
     parseador(value1,value2)
     .then((countries)=>{console.log(sortJSON(countries,"Value","desc"))
         resolve(sortJSON(countries,"Value","decreciente"));
     })
     .catch((error)=>{
        reject(error)
    });
})
}

module.exports = {
    list: listCountries,
}