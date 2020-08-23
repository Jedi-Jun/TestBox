<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title></title>
        <script
            src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossorigin="anonymous">
        </script>
    </head>
    <body>
        <!-- <p>
            <li type="square">Put any letters in the text box and see what happen in consloe.</li>
        </p>
        <h3>[Vanilla JavaScript]</h3>
        <input type="text" id="txtbox1" />
        <br /><br />    
        <h3>[jQuery]</h3>
        <input type="text" id="txtbox2" /> -->

        <script>
            // btn.addEventListener("click", function(){
            //     alert('clicked!');
            // });
            
            var p = document.createElement('p');
            var li = document.createElement('li');
            li.setAttribute('type', "square");
            li.innerText = "Put any letters in the text box and see what happen in consloe.";
            p.appendChild(li);
            document.body.appendChild(p);

            var h3 = document.createElement('h3');
            h3.innerText = "[Vanilla JavaScript]";
            var input = document.createElement('input');
            input.setAttribute('type', "text");
            input.setAttribute('id', "txtbox1");
            document.body.appendChild(h3);
            document.body.appendChild(input);

            var h3 = document.createElement('h3');
            h3.innerText = "[jQuery]";
            var input = document.createElement('input');
            input.setAttribute('type', "text");
            input.setAttribute('id', "txtbox2");
            document.body.appendChild(h3);
            document.body.appendChild(input);

            // JavaScript
            var txtbox1 = document.getElementById("txtbox1");
            txtbox1.addEventListener('keydown', function(e){
                const key = e.key;
                const keyCode = e.keyCode;
                if (keyCode === 13){    // Enter key
                    txtbox1.dispatchEvent(new KeyboardEvent('keydown', {key:'a', keyCode: 65}));
                }
              })

            // jQuery
            $("#txtbox2").keydown(function(e){
                if(e.keyCode === 13) {
                    var e = jQuery.Event("keydown");
                    e.which = 65; // # key 'a'
                    $("#txtbox2").val(String.fromCharCode(e.which));
                    $("#txtbox2").trigger(e);
                }
            });

            $('input').keydown(function(e){
                console.log('pushed key: ' + e.key);
                console.log('pushed key: ' + e.keyCode);
            });
        </script>
    </body>
</html>
