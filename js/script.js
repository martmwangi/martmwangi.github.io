      google.load("visualization", "1.1", {packages:["bar"]});
      google.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Languages', 'Percentage'],
          ["HTML", 65],
          ["CSS", 57],
          ["Javascript", 38],
          ["Python", 35],
          ['Java', 25]
        ]);

        var options = {
          title: '',
          width: 900,
          legend: { position: 'none' },
          chart: { title: '',
                   subtitle: '' },
          bars: 'horizontal', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top', label: 'Percentage'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        chart.draw(data, options);
      };
//For smooth scroll
//$(document).ready(function()){
//          setBindings();
//});
//function setBindings(){
//    $("nav a").click(function(e){
//        var sectionID = e.currentTarget.id + "section";
//        alert('button id' + sectionID);
//    })
//}










