var colorsData = [];
var animalsData = [];

var getClientListasString = function(clientList){
	var list = ""
	for(var j = 0; j < clientList.length; j++){
		list += clientList[j].username + " , ";
	}
	return list;

}
var getTimestamp = function(){
	var d = new Date();
	var fullTime = "";
	var am_pm = "";
	var hours = d.getUTCHours();
	if(hours >= 12){
		am_pm = "PM";
		var h = (hours % 12);
		fullTime += h
	}
	else{
		am_pm = "AM";
		fullTime += hours;
	}
	var mins = d.getUTCMinutes();
	if(mins < 10){
		fullTime += ":0" +mins + " " + am_pm;
	}
	else{
		fullTime += ":" +mins + " " + am_pm;
	}


	return fullTime.toString();

}
var getDatestamp = function(){
	var d = new Date();
	var fullDate ="";
	fullDate += d.getDate() + "/";
	fullDate += (d.getMonth() +1) + "/";
	fullDate += d.getFullYear();

	return fullDate;
}

var getRandomName = function(){
	var name = "";
	name += colorsData[Math.floor((Math.random() * colorsData.length))] + " ";
	name += animalsData[Math.floor((Math.random() * animalsData.length))];
	return name;
}

var getRandomColor = function(){
	var color = "";
	for(var i =0; i < 6; i++){
		var num = Math.floor((Math.random() * 16));
		if(num < 10){
			color += num;
		}
		else if(num == 10){
				color += "a";
		}
		else if(num == 11){
				color += "b";
		}
		else if(num == 12){
				color += "c";
		}
		else if(num == 13){
				color += "d";
		}
		else if(num == 14){
				color += "e";
		}
		else if(num == 15){
				color += "f";
		}
		else{
			color += 0;
		}
	}
	return color;
}

	var colorsData = [
		"austere",
		"killer",
		"great",
		"old",
		"nice",
		"funny",
		"sick",
		"wicked",
		"nasty",
		"cool",
		"broken",
		"new",
		"crappy",
		"super",
		"lovely",
		"ancient",
		"pretty",
		"warm",
		"deadly",
		"dangerous",
		"drunken",
		"stoned",
		"severe",
		"awesome",
		"creative",
		"poisonous",
		"smashing",
		"simple",
		"complex",
		"killer",
		"murderous",
		"humane",
		"human",
		"professor",
		"teacher",
		"swami",
		"corrosive",
		"monsterous",
		"big",
		"small",
		"little",
		"huge",
		"gigantic",
		"tiny",
		"happy",
		"sad",
		"inocuous",
		"agent",
		"amazing",
		"mister",
		"miss"

	];
	var animalsData = [
	  "aardvark",
	  "albatross",
	  "alligator",
	  "alpaca",
	  "ant",
	  "anteater",
	  "antelope",
	  "ape",
	  "armadillo",
	  "donkey",
	  "baboon",
	  "badger",
	  "barracuda",
	  "bat",
	  "bear",
	  "beaver",
	  "bee",
	  "bison",
	  "boar",
	  "buffalo",
	  "butterfly",
	  "camel",
	  "capybara",
	  "caribou",
	  "cassowary",
	  "cat",
	  "caterpillar",
	  "cattle",
	  "chamois",
	  "cheetah",
	  "chicken",
	  "chimpanzee",
	  "chinchilla",
	  "chough",
	  "clam",
	  "cobra",
	  "cockroach",
	  "cod",
	  "cormorant",
	  "coyote",
	  "crab",
	  "crane",
	  "crocodile",
	  "crow",
	  "curlew",
	  "deer",
	  "dinosaur",
	  "dog",
	  "dogfish",
	  "dolphin",
	  "donkey",
	  "dotterel",
	  "dove",
	  "dragonfly",
	  "duck",
	  "dugong",
	  "dunlin",
	  "eagle",
	  "echidna",
	  "eel",
	  "eland",
	  "elephant",
	  "elk",
	  "emu",
	  "falcon",
	  "ferret",
	  "finch",
	  "fish",
	  "flamingo",
	  "fly",
	  "fox",
	  "frog",
	  "gaur",
	  "gazelle",
	  "gerbil",
	  "giraffe",
	  "gnat",
	  "gnu",
	  "goat",
	  "goose",
	  "goldfinch",
	  "goldfish",
	  "gorilla",
	  "goshawk",
	  "grouse",
	  "guanaco",
	  "gull",
	  "hamster",
	  "hare",
	  "hawk",
	  "hedgehog",
	  "heron",
	  "herring",
	  "hornet",
	  "horse",
	  "human",
	  "hyena",
	  "ibex",
	  "ibis",
	  "jackal",
	  "jaguar",
	  "jay",
	  "jellyfish",
	  "kangaroo",
	  "kingfisher",
	  "koala",
	  "kookabura",
	  "kouprey",
	  "kudu",
	  "lapwing",
	  "lark",
	  "lemur",
	  "leopard",
	  "lion",
	  "llama",
	  "lobster",
	  "locust",
	  "loris",
	  "louse",
	  "lyrebird",
	  "magpie",
	  "mallard",
	  "manatee",
	  "mandrill",
	  "mantis",
	  "marten",
	  "meerkat",
	  "mink",
	  "mole",
	  "mongoose",
	  "monkey",
	  "moose",
	  "mouse",
	  "mosquito",
	  "mule",
	  "narwhal",
	  "newt",
	  "octopus",
	  "okapi",
	  "opossum",
	  "oryx",
	  "ostrich",
	  "otter",
	  "owl",
	  "ox",
	  "oyster",
	  "panther",
	  "parrot",
	  "partridge",
	  "peafowl",
	  "pelican",
	  "penguin",
	  "pheasant",
	  "pig",
	  "pigeon",
	  "polar-bear",
	  "pony",
	  "porcupine",
	  "porpoise",
	  "quail",
	  "quelea",
	  "quetzal",
	  "rabbit",
	  "raccoon",
	  "rail",
	  "ram",
	  "rat",
	  "raven",
	  "red-deer",
	  "red-panda",
	  "reindeer",
	  "rhinoceros",
	  "rook",
	  "salamander",
	  "salmon",
	  "sand-dollar",
	  "sandpiper",
	  "sardine",
	  "scorpion",
	  "sea-lion",
	  "sea-urchin",
	  "seahorse",
	  "seal",
	  "shark",
	  "sheep",
	  "shrew",
	  "skunk",
	  "snail",
	  "snake",
	  "sparrow",
	  "spider",
	  "spoonbill",
	  "squid",
	  "squirrel",
	  "starling",
	  "stingray",
	  "stinkbug",
	  "stork",
	  "swallow",
	  "swan",
	  "tapir",
	  "tarsier",
	  "termite",
	  "tiger",
	  "toad",
	  "trout",
	  "turkey",
	  "turtle",
	  "vicu�a",
	  "viper",
	  "vulture",
	  "wallaby",
	  "walrus",
	  "wasp",
	  "weasel",
	  "whale",
	  "wolf",
	  "wolverine",
	  "wombat",
	  "woodcock",
	  "woodpecker",
	  "worm",
	  "wren",
	  "yak",
	  "zebra"
	];



module.exports.getClientListasString = getClientListasString;
module.exports.getTimestamp = getTimestamp;
module.exports.getDatestamp = getDatestamp;
module.exports.getRandomColor = getRandomColor;
module.exports.getRandomName = getRandomName;
