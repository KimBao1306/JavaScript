// ẩn hiện 1 element
function myFunction(){
        var showSearchAdv = document.getElementById('show_search_advance'); //chỗ để click (hiện)
        var searchAdv = document.getElementById('search_advance') //Chỗ ẩn 
        
        if(showSearchAdv.innerHTML == 'Tìm Kiếm Nâng Cao'){
            searchAdv.style.display = 'inline-table'
            showSearchAdv.innerHTML = "Bỏ Tìm Kiếm Nâng Cao"
        } else {
            searchAdv.style.display = 'none'
            showSearchAdv.innerHTML = "Tìm Kiếm Nâng Cao"

        }
}
//^^^^^^
