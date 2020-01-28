
function load_results_table(){
    for (var i = 0; i < 3; i ++){
        add_row("List group item heading", 
        "3 days ago", 
        "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
        "Donec id elit non mi porta.")
    }

}

/**
 * equivalent of:
 *  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
    </a>
 */
function add_row(info1, info2, info3, info4){
    //creating inner parts of the card
    var a = document.createElement("a");
    a.href = "#";
    a.className = "list-group-item list-group-item-action flex-column align-items-start active";

    var div = document.createElement("div");
    div.className = "d-flex w-100 justify-content-between";

    var h5 = document.createElement("h5");
    h5.className = "mb-1";
    h5.innerHTML = info1;

    var small1 = document.createElement("small");
    small1.innerHTML = info2;

    var p = document.createElement("p");
    p.className = "mb-1";
    p.innerHTML = info3;

    var small2 = document.createElement("small");
    small2.innerHTML = info4;


    // attachiing those parts
    div.append(h5);
    div.append(small1);
    a.append(div);
    a.append(p);
    a.append(small2);
    results_table.append(a);
}

var results_table = document.getElementById("result-table");
load_results_table();