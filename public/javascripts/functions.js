var row; var column; var tile_selected;
function generateTile() {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", '/get_tile', false );
      xmlHttp.send( null );
      console.log(xmlHttp);
      var resp = JSON.parse(xmlHttp.responseText);
      console.log(resp.image_url);
      document.getElementById("current-tile2").src = resp.image_url;
      document.getElementById("place-button").disabled = false;
}
      function rotateLeft() {
            if (document.getElementById("current-tile2").style.transform == "") {
                  document.getElementById("current-tile2").style.WebkitTransform = "rotate(270deg)";
                  document.getElementById("current-tile2").style.msTransform = "rotate(270deg)";
                  document.getElementById("current-tile2").style.transform = "rotate(270deg)";
            } else if (document.getElementById("current-tile2").style.transform === "rotate(0deg)") {
                  document.getElementById("current-tile2").style.WebkitTransform = "rotate(270deg)";
                  document.getElementById("current-tile2").style.msTransform = "rotate(270deg)";
                  document.getElementById("current-tile2").style.transform = "rotate(270deg)";
            } else if (document.getElementById("current-tile2").style.transform === "rotate(270deg)") {
                  document.getElementById("current-tile2").style.WebkitTransform = "rotate(180deg)";
                  document.getElementById("current-tile2").style.msTransform = "rotate(180deg)";
                  document.getElementById("current-tile2").style.transform = "rotate(180deg)";
            } else if (document.getElementById("current-tile2").style.transform === "rotate(180deg)") {
                  document.getElementById("current-tile2").style.WebkitTransform = "rotate(90deg)";
                  document.getElementById("current-tile2").style.msTransform = "rotate(90deg)";
                  document.getElementById("current-tile2").style.transform = "rotate(90deg)";
            } else if (document.getElementById("current-tile2").style.transform === "rotate(90deg)") {
                  document.getElementById("current-tile2").style.WebkitTransform = "rotate(0deg)";
                  document.getElementById("current-tile2").style.msTransform = "rotate(0deg)";
                  document.getElementById("current-tile2").style.transform = "rotate(0deg)";
            } else {
                  console.log("unrotatable");
            }
      }

      function rotateRight() {
            console.log(document.getElementById("current-tile2").style.transform);
            if (document.getElementById("current-tile2").style.transform == "") {
                  document.getElementById("current-tile2").style.WebkitTransform = "rotate(90deg)";
                  document.getElementById("current-tile2").style.msTransform = "rotate(90deg)";
                  document.getElementById("current-tile2").style.transform = "rotate(90deg)";
            } else if (document.getElementById("current-tile2").style.transform === "rotate(0deg)") {
                  document.getElementById("current-tile2").style.WebkitTransform = "rotate(90deg)";
                  document.getElementById("current-tile2").style.msTransform = "rotate(90deg)";
                  document.getElementById("current-tile2").style.transform = "rotate(90deg)";
            } else if (document.getElementById("current-tile2").style.transform === "rotate(270deg)") {
                  document.getElementById("current-tile2").style.WebkitTransform = "rotate(0deg)";
                  document.getElementById("current-tile2").style.msTransform = "rotate(0deg)";
                  document.getElementById("current-tile2").style.transform = "rotate(0deg)";
            } else if (document.getElementById("current-tile2").style.transform === "rotate(180deg)") {
                  document.getElementById("current-tile2").style.WebkitTransform = "rotate(270deg)";
                  document.getElementById("current-tile2").style.msTransform = "rotate(270deg)";
                  document.getElementById("current-tile2").style.transform = "rotate(270deg)";
            } else if (document.getElementById("current-tile2").style.transform === "rotate(90deg)") {
                  document.getElementById("current-tile2").style.WebkitTransform = "rotate(180deg)";
                  document.getElementById("current-tile2").style.msTransform = "rotate(180deg)";
                  document.getElementById("current-tile2").style.transform = "rotate(180deg)";
            } else {
                  console.log("unrotatable");
            }
      }
      function selectCell(td) {
            if (document.getElementsByClassName(td.className)[0].innerHTML !== "") {

            } else {
            tile_selected = td.className;
            row= Number(tile_selected.substring(4,7));
            column= Number(tile_selected.substring(7,10));
            console.log("Row: " + row + ", Column: " + column);
            var x = document.getElementsByTagName("td");
            for (var i=0;i<x.length;i++) {
                x[i].style.backgroundColor = "";
                //x[i].innerHTML = "";
            }
            var y = document.getElementsByClassName(tile_selected);
            y[0].style.backgroundColor = "#eeeeee";
            }

      }
      function placeTile() {
            console.log(row);
            console.log(column);
            console.log(tile_selected);
            var temp1 = document.getElementById("current-tile2").style.WebkitTransform;
            var temp2 = document.getElementById("current-tile2").style.msTransform;
            var temp3 = document.getElementById("current-tile2").style.transform;
            if (!row && !column) {
                  alert("Please select a tile first");
            } else {
                  if (document.getElementsByClassName("tile003003")[0].innerHTML === "" && tile_selected !== "tile003003") {
                        document.getElementsByClassName("tile003003")[0].innerHTML = "<img id=\""+tile_selected+"\" src=\""+document.getElementById("current-tile2").src+"\">";
                        document.getElementById(tile_selected).style.WebkitTransform = temp1;
                        document.getElementById(tile_selected).style.msTransform = temp2;
                        document.getElementById(tile_selected).style.transform = temp3;
                        var x = document.getElementsByTagName("td");
                        for (var i=0;i<x.length;i++) {
                              x[i].style.backgroundColor = "";
                              //x[i].innerHTML = "";
                        }
                        alert("First tile, placed in centre");
                  } else {
                        document.getElementsByClassName(tile_selected)[0].innerHTML = "<img id=\""+tile_selected+"\" src=\""+document.getElementById("current-tile2").src+"\">";
                        document.getElementById(tile_selected).style.WebkitTransform = temp1;
                        document.getElementById(tile_selected).style.msTransform = temp2;
                        document.getElementById(tile_selected).style.transform = temp3;
                  }
                  document.getElementById("current-tile2").src = "http://placekitten.com/110/100/";
                  document.getElementById("current-tile2").style.WebkitTransform = "rotate(0deg)";
                  document.getElementById("current-tile2").style.msTransform = "rotate(0deg)";
                  document.getElementById("current-tile2").style.transform = "rotate(0deg)";
                  document.getElementById("place-button").disabled = true;

            }
      }
function resetTiles() {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", '/reset', false );
      xmlHttp.send( null );
      console.log(xmlHttp.responseText);
}