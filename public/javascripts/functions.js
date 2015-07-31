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
      document.getElementById("get-tile").disabled = true;
}
      function rotateLeft() {
            if (document.getElementById("current-tile2").style.transform == "") {
                  rotate("current-tile2",270);
            } else if (document.getElementById("current-tile2").style.transform === "rotate(0deg)") {
                  rotate("current-tile2",270);
            } else if (document.getElementById("current-tile2").style.transform === "rotate(270deg)") {
                  rotate("current-tile2",180);
            } else if (document.getElementById("current-tile2").style.transform === "rotate(180deg)") {
                  rotate("current-tile2",90);
            } else if (document.getElementById("current-tile2").style.transform === "rotate(90deg)") {
                  rotate("current-tile2",0);
            } else {
                  console.log("unrotatable");
            }
      }

      function rotateRight() {
            if (document.getElementById("current-tile2").style.transform == "") {
                  rotate("current-tile2",90);
            } else if (document.getElementById("current-tile2").style.transform === "rotate(0deg)") {
                  rotate("current-tile2",90);
            } else if (document.getElementById("current-tile2").style.transform === "rotate(270deg)") {
                  rotate("current-tile2",0);
            } else if (document.getElementById("current-tile2").style.transform === "rotate(180deg)") {
                  rotate("current-tile2",270);
            } else if (document.getElementById("current-tile2").style.transform === "rotate(90deg)") {
                  rotate("current-tile2",180);
            } else {
                  console.log("unrotatable");
            }
      }
      function selectCell(td) {
            if (document.getElementsByClassName(td.className)[0].innerHTML !== "") {
                  if (tile_selected) {
                        document.getElementsByClassName(tile_selected)[0].style.backgroundColor = "";
                        row = undefined; column = undefined; tile_selected = undefined;
                  }
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
                              var xmlHttp = new XMLHttpRequest();
                              xmlHttp.open( "POST", '/placetile', false );
                              xmlHttp.setRequestHeader("Content-Type", "application/json");
                              xmlHttp.send(JSON.stringify({"row": 3, "column": 3, "rotation": temp3}));
                        document.getElementsByClassName("tile003003")[0].innerHTML = "<img id=\"tile003003\" src=\""+document.getElementById("current-tile2").src+"\">";
                        document.getElementById("tile003003").style.WebkitTransform = temp1;
                        document.getElementById("tile003003").style.msTransform = temp2;
                        document.getElementById("tile003003").style.transform = temp3;
                        document.getElementsByClassName(tile_selected)[0].style.backgroundColor = "";
                        row = undefined; column = undefined; tile_selected = undefined;
                        document.getElementById("current-tile2").src = "http://placekitten.com/110/100/";
                        rotate("current-tile2",0);
                        document.getElementById("place-button").disabled = true;
                        document.getElementById("get-tile").disabled = false;
                        alert("First tile, placed in centre");
                  } else {
                        if (tile_selected === "tile003003" || checkAdjacent()) {
                              var xmlHttp = new XMLHttpRequest();
                              xmlHttp.open( "POST", '/placetile', false );
                              xmlHttp.setRequestHeader("Content-Type", "application/json");
                              xmlHttp.send(JSON.stringify({"row": row, "column": column, "rotation": temp3}));
                              document.getElementsByClassName(tile_selected)[0].innerHTML = "<img id=\""+tile_selected+"\" src=\""+document.getElementById("current-tile2").src+"\">";
                              document.getElementById(tile_selected).style.WebkitTransform = temp1;
                              document.getElementById(tile_selected).style.msTransform = temp2;
                              document.getElementById(tile_selected).style.transform = temp3;
                              console.log(checkAdjacent());
                              row = undefined; column = undefined; tile_selected = undefined;
                              document.getElementById("current-tile2").src = "http://placekitten.com/110/100/";
                              rotate("current-tile2",0);
                              document.getElementById("place-button").disabled = true;
                              document.getElementById("get-tile").disabled = false;
                        } else {
                              console.log(checkAdjacent());
                              alert("Invalid tile placement. Please try again");
                              document.getElementsByClassName(tile_selected)[0].style.backgroundColor = "";
                              row = undefined; column = undefined; tile_selected = undefined;
                        }
                  }
            }
      }
function resetTiles() {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", '/reset', false );
      xmlHttp.send( null );
      console.log(xmlHttp.responseText);
      document.getElementById("current-tile2").src = "http://placekitten.com/110/100/";
      document.getElementById("place-button").disabled = true;
      document.getElementById("get-tile").disabled = false;
}
function rotate(id,deg) {
      document.getElementById(id).style.WebkitTransform = "rotate("+deg+"deg)";
      document.getElementById(id).style.msTransform = "rotate("+deg+"deg)";
      document.getElementById(id).style.transform = "rotate("+deg+"deg)";
}
function checkAdjacent() {
      var rowCheck = row - 1;
      var colCheck = column;
      var check = "tile"+convNum(rowCheck)+convNum(colCheck);
      if (document.getElementById(check)) {
            return true;
      }
      rowCheck = row;
      colCheck = column-1;
      check = "tile"+convNum(rowCheck)+convNum(colCheck);
      if (document.getElementById(check)) {
            return true;
      }
      rowCheck = row;
      colCheck = column+1;
      check = "tile"+convNum(rowCheck)+convNum(colCheck);
      if (document.getElementById(check)) {
            return true;
      }
      rowCheck = row + 1;
      colCheck = column;
      check = "tile"+convNum(rowCheck)+convNum(colCheck);
      if (document.getElementById(check)) {
            return true;
      }
      return false;
}
function convNum(num) {
      if (num<10) {
            return "00"+num;
      } else if (num<100) {
            return "0"+num;
      } else {
            return num.toString();
      }
}