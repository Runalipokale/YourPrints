var acc = document.getElementsByClassName("question");
var contactpage =document.getElementsByClassName("contact-page")
var i;
for(i=0;i<acc.length;i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");
        this.parentElement.classList.toggle
        ("active");

        var answer = this.nextElementSibling;
        if(answer.style.display==="block"){
            answer.style.display="none";
        }
        else{
            answer.style.display="block";
        }
    })
}

// sidebar toggle
        var sidebarOpen = false;
        var sidebar = document.getElementById("sidebar");

        function openSidebar(){
          if(!sidebarOpen){
            sidebar.classList.add("sidebar-responsive");
            sidebarOpen = true;
          }
        }

        function closeSidebar(){
          if(sidebarOpen){
            sidebar.classList.remove("sidebar-responsive");
            sidebarOpen=false;
          }
        }

        // charts
        // Bar chart
        var barChartOptions = {
          series: [{
          data: [10, 8, 6, 4, 2]
        }],
          chart: {
          type: 'bar',
          height: 350,
          toolbar:{
            show: false
          },
        },
        colors:[
          "#E83E8D",
          "#17A3B8", 
          "#BE3EE8", 
          "#69EDDA", 
          "#4f35a1"],
        plotOptions: {
          bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%',
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: ["T-shirts", "Sweatshirts", "Hoodies", "Oversized T-shirts", "Crop T-shirts"],
        },
        yaxis: {
          title: {
            text: "Count"
          }
        }
        };

        var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
        barChart.render();
      
      //Area chart
      var areaChartOptions = {
        series: [{
        name: 'Purchase Orders',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Sales Orders',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
        chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false
        },
      },
      colors: ["#4f35a1", "#246dec"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      markers: {
        size: 0
      },
      yaxis: [
        {
          title: {
            text: 'Purchase Orders',
          },
        },
        {
          opposite: true,
          title: {
            text: 'Sales Orders',
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
      }
      };

      var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
      areaChart.render();
    
