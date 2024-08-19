        function clearAction() {
            document.getElementById("result").value = "";
        }

        function addChar(char) {
            document.getElementById("result").value += char;
        }

        function sqrtNumb(){
            let ex = document.getElementById("result").value;
            let res = Math.sqrt(Number(ex));
            document.getElementById("result").value = res;
        }

        function showResult() {
            let ex = document.getElementById("result").value;
            console.log(ex);
            let res = eval(ex);
            document.getElementById("result").value = res;
        }