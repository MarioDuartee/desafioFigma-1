var inputFilter = document.querySelector("#searchTitle")

inputFilter.addEventListener('input', function () {
    var fieldTitle = document.querySelectorAll('.element-main')

    if (this.value.length > 0) {
        fieldTitle.forEach(fieldTitle => {
            var elementTitle = fieldTitle.querySelector('.content-main h2').textContent
            var expression = new RegExp(this.value, "i")
            !expression.test(elementTitle) ? fieldTitle.classList.add('invisivel') : fieldTitle.classList.remove('invisivel')
        });
    }

})