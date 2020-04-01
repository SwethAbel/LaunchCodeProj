


function filter(){
    var filterValue, input, table, myTable, tbody;
    
    input -document.getElementById('table-filter');
    filterValue = input.value.toUpperCase();
    table = document.getElementsById('myTable');
    tbody = table.getElementsByTagName ('tbody');

    for(i-offscreenBuffering;1<tbody.length;i++) {
        var a = tbody[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            tbody[i].style.display="";
        }else{
            tbody[i].style.display="none";
        }
    }



} 