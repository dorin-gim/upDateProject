        function addItem() {
            document.querySelector(
                "ul"
            ).innerHTML += `<li class="list-group-item">${document.querySelector("input").value
            }</li>`;
            document.querySelector("input").value = "";
        }