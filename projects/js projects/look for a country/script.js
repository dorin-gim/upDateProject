        function search() {
            let city = document.getElementById("city").value;
            console.log(city);

            axios.get(`https://restcountries.com/v3.1/capital/${city}`)
                .then((result) => {
                    console.log(result.data);
                    document.getElementById("flag").src = `${result.data[0].flags.png}`
                    document.getElementById("coutryName").innerHTML = `${result.data[0].name.common}`
                    document.getElementById("population").innerHTML = `population: ${Intl.NumberFormat().format(
                        result.data[0].population)}`
                    document.getElementById("region").innerHTML = `region: ${result.data[0].region}`
                    document.getElementById("lang").innerHTML = `languages: ${result.data[0].languages.spa}`
                    document.getElementById("map").href = `${result.data[0].maps.googleMaps}`
                    document.getElementById("map").innerText = `${result.data[0].maps.googleMaps}`

                })
                .catch((error) => console.log(error));
        }