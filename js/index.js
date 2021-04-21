let cats = {
    "title": "Cat Families",
    "intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us",
    "cats": [
      {
        "name": "Lindy",
        "breed": "Cymric",
        "color": "white",
        "kittens": [
          {
            "name": "Percy",
            "gender": "m"
          },
          {
            "name": "Thea",
            "gender": "f"
          },
          {
            "name": "Annis",
            "gender": "f"
          }
        ]
      },
      {
        "name": "Mina",
        "breed": "Aphrodite Giant",
        "color": "ginger",
        "kittens": [
          {
            "name": "Doris",
            "gender": "f"
          },
          {
            "name": "Pickle",
            "gender": "f"
          },
          {
            "name": "Max",
            "gender": "m"
          }
        ]
      },
      {
        "name": "Antonia",
        "breed": "Ocicat",
        "color": "leopard spotted",
        "kittens": [
          {
            "name": "Bridget",
            "gender": "f"
          },
          {
            "name": "Randolph",
            "gender": "m"
          }
        ]
      }
    ]
}

var what = JSON.stringify(cats);
var idk = JSON.parse(what);
//document.getElementById('title').innerHTML = idk.cats.kittens[1].name;
function setup(){
  document.getElementById('Mtrait1').innerHTML = idk.cats[0].name;
  document.getElementById('Mtrait2').innerHTML = idk.cats[0].breed;
  document.getElementById('Mtrait3').innerHTML = idk.cats[0].color;

  document.getElementById('Ktrait1').innerHTML = idk.cats[0].kittens[0].name;
  document.getElementById('Ktrait2').innerHTML = idk.cats[0].kittens[0].gender;

  document.getElementById('Ktrait4').innerHTML = idk.cats[0].kittens[1].name;
  document.getElementById('Ktrait5').innerHTML = idk.cats[0].kittens[1].gender;

  document.getElementById('Ktrait7').innerHTML = idk.cats[0].kittens[2].name;
  document.getElementById('Ktrait8').innerHTML = idk.cats[0].kittens[2].gender;
}

setup();