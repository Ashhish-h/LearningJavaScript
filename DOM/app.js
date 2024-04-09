document.getElementById("header1"); // whole tag will be selected and returned as object
// You can also assign it in a variable you can even pass a variable name instead of a id
//Example-
let header = document.getElementById("header1");
//You can asscess all the properties of the selected header by using this header regerence
header.outerText; // it will return 'This is first header' basically content of the header.

//similarly you can select elements by class name and tag name

// ######## querrySelector ###########

document.querySelector('h1'); // it will select only the first h1 tag; 
// we can select by any method by tag name or by ID name(#ID) or by class name(.className) and we can also use all the selectors of css

document.querySelectorAll("h1");// it will select all h1 tags
// it returns a NodeList containing all the h1 tags;
