console.log(" ");
console.log("Zadanie7");

const App = function() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
  this.menuUl = document.querySelector(".menu").querySelector("ul")
      .querySelectorAll("li");
}


App.prototype.generateLinks = function() {
  let sorted = this.websites.sort((a, b) => a.length - b.length);
  sorted.forEach(element => {
    this.links[this.links.length] = "https://" + element + ".com";
  });
  this.menuUl.forEach((element, index) => {
    element.querySelector("a").setAttribute("href", this.links[index]);
  });
}

let app = new App();
app.generateLinks();
console.log(app.links)
