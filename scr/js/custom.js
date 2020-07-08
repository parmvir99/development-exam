function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
        if (txtValue.toUpperCase().indexOf(filter) == 0) {
            li[i].style.display = "none";
        }
    }
}

// Category Modal
var modalCategory = document.getElementById("categoryModal");
var categoryModalClose = document.getElementsByClassName("closeCategoryModal")[0];
categoryModalClose.onclick = function() {
  modalCategory.style.display = "none";
}
function openModalCategory() {
  modalCategory.style.display = "block";
  modalCategory.classList.add("show");
}

// Category List Modal
var categoryListModal = document.getElementById("categoryListModal");
var categoryListModalClose = document.getElementsByClassName("closeCategoryListModal")[0];
categoryListModalClose.onclick = function() {
  categoryListModal.style.display = "none";
}
function openCategoryListModal() {
  categoryListModal.style.display = "block";
  categoryListModal.classList.add("show");
}

// Review Modal
var reviewModal = document.getElementById("reviewModal");
var reviewModalClose = document.getElementsByClassName("reviewModalClose")[0];
reviewModalClose.onclick = function() {
  reviewModal.style.display = "none";
}
function openReviewModal() {
  reviewModal.style.display = "block";
  reviewModal.classList.add("show");
}
