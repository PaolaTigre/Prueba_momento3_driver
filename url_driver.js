let url = prompt ("");
let one_start = "";
let two_start = "";

for (let i = 0; i < url.length; i++) {
  if (url.substring(i,i+2) === "d/") {
    i += 2;
    for (; url[i] !== "/"; i++) {
        one_start += url[i];
    }
  } else if (url.substring(i,i+2) === "v/") {
    i += 2;
    for (; url[i] !== "?"; i++) {
        two_start += url[i];
    }
  }
}
let doc = document.getElementById("img01")
let Url = prompt ('Ingrse id Url gdrive');
doc.src=`https://drive.google.com/uc?export=view&id=${one_start}`;

console.log(one_start+two_start);
