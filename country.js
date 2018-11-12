class Country
{
    constructor(name, lang, greeting, colors)
    {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    setColors()
    {
        
    }
}

var mexico = new Country ("Mexico", "Spanish", "Hola Mundo!", ["red", "white", "green"]);
var canada = new Country ("Canada", "English", "Hello World!", ["red", "white", "white"]);
var india = new Country ("India", "Hindi", "Namaste Duniya!", ["orange", "white", "green"]);
var mali = new Country ("Mali", "French", "Bonjour le monde!", ["green", "yellow", "red"]);
var vietNam = new Country ("Viet Nam", "Vietnamese", "Chào thế giới!", ["red", "yellow", "yellow"]);

function SwitchCountry()
{
    var input = $("#CountryList option:selected").val();
    var country;

    if (input === "Mexico") {
        //set country to Mexico
        country = mexico;
    }
    else if (input === "Canada") {
        country = canada;
    }
    else if (input === "India") {
        country = india;
    }
    else if (input === "Mali") {
        country = mali;
    }
    else if (input === "Viet Nam") {
        country = vietNam;
    }

    $("#Color1").css("background-color", country.colors[0]);
    $("#Color2").css("background-color", country.colors[1]);
    $("#Color3").css("background-color", country.colors[2]);

    $("#CountryName").text(country.name);
    $("#OfficialLanguage").text(country.lang);
    $("#HelloWorld").text(country.greeting);
}