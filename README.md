# JavaScript---Timer-Functions-and-objects
<!DOCTYPE HTML>
<HTML>
    <head>
        <style>
            body {
  font-family: system-ui;
  
  color: black;
  text-align: center;
  font-size: 20px;
}
</style>
<head>
    <body>


<hr>
<div id = "clock" onload="currentTime()"></div><br>
<hr>

<div id="background">&nbsp</div>
<hr>

<p> Change font size!</p>
<p id="paral" onmouseover="incSize()" onmouseout="decSize()"> move cursor over me to zoom in... </p> 

<section id="Q4">  <!--height="120" width="340"-->
    <h5 class="text-center text-white bg mt-5">4. Moving Car</h5>
    <div class="container-fluid mt-5">
        <img id="car" class="m-4" src="C:\Users\navee\Downloads\car.jpg" height="60" width="170" alt="car-img" style="position: relative; left: 0px">
                 
        <div class="text-left ">
            <button class="btn btn-outline-success m-3" onclick="q4Start()">Start</button>
            <button class="btn btn-outline-danger m-3" onclick="q4Stop()">Stop</button>                    
        </div>                            
    </div>
    <h5 id="convertedValue" class="text-left text-warning mb-5"></h5> 
    <hr class="border border-warning border-2 opacity-50">
</section>
<section id="Q5">
    <h3 class="text-center text-white bg mt-5">5. Array of Objects</h3>
    <div class="container col-sm-12 mt-5">                
        <div class="text-center">
            <button class="btn btn-outline-warning mb-5" onclick="q5()">Print Student Details</button>
        </div>
        
        <div class="row" font-size="16px;">
            <div class="col-sm-6 text-center font-size=16px;">
                <h5 id="bfr" class="text-warning"></h5>
                <p id="before" class="text-warning"></p>

            </div>
            <div class="col-sm-6 text-center font-size=16px;">
                <h5 id="aft" class="text-warning"></h5>
                <p id="after" class="text-warning"></p>

            </div>
        </div>                            
    </div>            
    <h5 id="details" class="text-center text-warning font-size=16px;"></h5> 
    <hr class="border border-warning border-2 opacity-50">
</section>
<script src="ex6.js"></script>
</body>
</html>
