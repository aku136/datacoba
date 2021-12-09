<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>REALTIME</title>

    <script type="text/javascript" src="jquery/jquery.min.js"></script>
<!-- load otomatis -->
    <script type="text/javascript">
        $(document).ready( function(){

            setInterval( function(){
                 $("#cekcurrent").load("cekcurrent.php");
                 $("#cekvoltage").load("cekvoltage.php");
                 $("#cektime").load("cektime.php");
            },1000 );

        });
    </script>
  </head>
  <body

    <div class="container" style="text-align: center">
        <h2>
            MONITORING SECARA REALTIME
        </h2>

        <!-- menampilkan current -->
        <div class="card text-center">
            <div class="card-header" style="font-size: 30px; font-weight: bold; background-color: yellow">
                Current
            </div>
            <div class="card-body">
               <h1><span id="cekcurrent"> 0 </span></h1>
            </div>
        </div>
    <div/>

         <!-- menampilkan voltage -->
        <div class="card text-center">
            <div class="card-header" style="font-size: 30px; font-weight: bold; background-color: yellow">
                Voltage
            </div>
            <div class="card-body">
            <h1><span id="cekvoltage"> 0 </span></h1>
            </div>
        </div>
    <div/>

        <!-- menampilkan time -->
         <div class="card text-center">
            <div class="card-header" style="font-size: 30px; font-weight: bold; background-color: yellow">
                Time
            </div>
            <div class="card-body">
                <h1><span id="cektime"> 0 </span></h1>
            </div>
        </div>
    <div/>



  </body>
</html>