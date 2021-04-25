
window.onload = function () {

    var chart = new CanvasJS.Chart("piechart",{
    theme: "light2",
    title:{
      text: "Type Of Course Enrolled"
    },		
    data: [
    {       
      type: "pie",
      showInLegend: true,
      toolTipContent: "{y} - #percent %",
      yValueFormatString: "# course",
      legendText: "{indexLabel}",
      dataPoints: [
        {  y: 2, indexLabel: "Graphic Design" },
        {  y: 3, indexLabel: "Mathematics" },
        {  y: 1, indexLabel: "Arts" },
        {  y: 4, indexLabel: "Problem Solving"},
        {  y: 7, indexLabel: "Programming" },
        {  y: 1, indexLabel: "Business"}
      ]
    }
    ]
  });
  chart.render();

  //   var chart = new CanvasJS.Chart("chartContainer", {
  //       data: [
  //       {
  //           type: "column",
  //           dataPoints: [
  //           { x: 10, y: 10 },
  //           { x: 20, y: 15 },
  //           { x: 30, y: 25 },
  //           { x: 40, y: 30 },
  //           { x: 50, y: 28 }
  //           ]
  //       }
  //       ]
  //   });

  //   chart.render();

//   var enrolledCount = document.getElemetsByClass("course-enrolled");
//   count = enrolledCount.getElementsById("p");
  

  var doghnutChart = new CanvasJS.Chart("doughnut", {
      animationEnabled: true,
      title:{
          text: "Overall Time Spent(hrs)",
      },
      data: [{
          type: "doughnut",
          startAngle: 60,
          //innerRadius: 60,
          indexLabelFontSize: 17,
          indexLabel: "{label} - #percent%",
          toolTipContent: "<b>{label}:</b> {y} (#percent%)",
          dataPoints: [
              { y: 6, label: "Business and Ethics" },
              { y: 18, label: "Problem Solving Crash Course" },
              { y: 10, label: "UI Designing with Adobe" },
              { y: 2, label: "General Mathematics"},
              { y: 15, label: "Python programming for ML"},
              { y: 6, label: "Art for Kick-start"}
          ]
      }]
  });
  doghnutChart.render();

  var linechart = new CanvasJS.Chart("timeline", {
      animationEnabled: true,
      theme: "light2",
      title:{
          text: "Hours Spent This Week"
      },
      data: [{        
          type: "line",
            indexLabelFontSize: 16,
          dataPoints: [
              { y: 3 , label: "Monday"},
              { y: 4 , label: "Tuesday"},
              { y: 7, label:"Wednesday", indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle" },
              { y: 1 ,label: "Thursday"},
              { y: 0.5, label:"Friday", indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross"  },
              { y: 5, label:"Saturday"},
              { y: 2, label:"Sunday"},
          ]
      }]
  });
  
  linechart.render();
  
  var totalAssignments = 40;
  var assignmentsData = {
    "New vs Submitted Assignments": [{
      click: assignmentsChartDrilldownHandler,
      cursor: "pointer",
      explodeOnClick: false,
      innerRadius: "60%",
      legendMarkerType: "square",
      name: "New vs Submitted Assignments",
      radius: "100%",
      showInLegend: true,
      startAngle: 90,
      type: "doughnut",
      dataPoints: [
        { y: 40, name: "New Assignments", color: "#E7823A" },
        { y: 37, name: "Submitted Assignments", color: "#546BC1" }
      ]
    }],
    "New Assignments": [{
      color: "#E7823A",
      name: "New Assignments",
      type: "column",
      dataPoints: [
        { x: new Date("1 Jan 2020"), y: 3 },
        { x: new Date("1 Feb 2020"), y: 4 },
        { x: new Date("1 Mar 2020"), y: 1 },
        { x: new Date("1 Apr 2020"), y: 7 },
        { x: new Date("1 May 2020"), y: 4 },
        { x: new Date("1 Jun 2020"), y: 3 },
        { x: new Date("1 Jul 2020"), y: 1 },
        { x: new Date("1 Aug 2020"), y: 5 },
        { x: new Date("1 Sep 2020"), y: 6 },
        { x: new Date("1 Oct 2020"), y: 1 },
        { x: new Date("1 Nov 2020"), y: 0 },
        { x: new Date("1 Dec 2020"), y: 5 }
      ]
    }],
    "Submitted Assignments": [{
      color: "#546BC1",
      name: "Submitted Assignments",
      type: "column",
      dataPoints: [
        { x: new Date("1 Jan 2020"), y: 2 },
        { x: new Date("1 Feb 2020"), y: 3 },
        { x: new Date("1 Mar 2020"), y: 2 },
        { x: new Date("1 Apr 2020"), y: 5 },
        { x: new Date("1 May 2020"), y: 4 },
        { x: new Date("1 Jun 2020"), y: 2 },
        { x: new Date("1 Jul 2020"), y: 3 },
        { x: new Date("1 Aug 2020"), y: 0 },
        { x: new Date("1 Sep 2020"), y: 2 },
        { x: new Date("1 Oct 2020"), y: 4 },
        { x: new Date("1 Nov 2020"), y: 3 },
        { x: new Date("1 Dec 2020"), y: 7 }
      ]
    }]
  };

  var newVSSubmittededAssignmentsOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "New VS Submitted Assignments"
    },
    subtitles: [{
      text: "Click on Any Segment to Drilldown",
      backgroundColor: "#2eacd1",
      fontSize: 16,
      fontColor: "white",
      padding: 5
    }],
    legend: {
      fontFamily: "calibri",
      fontSize: 14,
      itemTextFormatter: function (e) {
        return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalAssignments * 100) + "%";  
      }
    },
    data: []
  };

  var assignmentsDrilldownedChartOptions = {
    animationEnabled: true,
    theme: "light2",
    axisX: {
      labelFontColor: "#717171",
      lineColor: "#a2a2a2",
      tickColor: "#a2a2a2"
    },
    axisY: {
      gridThickness: 0,
      includeZero: false,
      labelFontColor: "#717171",
      lineColor: "#a2a2a2",
      tickColor: "#a2a2a2",
      lineThickness: 1
    },
    data: []
  };

  var chart = new CanvasJS.Chart("drilldown", newVSSubmittededAssignmentsOptions);
  chart.options.data = assignmentsData["New vs Submitted Assignments"];
  chart.render();

  function assignmentsChartDrilldownHandler(e) {
    chart = new CanvasJS.Chart("drilldown", assignmentsDrilldownedChartOptions);
    chart.options.data = assignmentsData[e.dataPoint.name];
    chart.options.title = { text: e.dataPoint.name }
    chart.render();
    $("#backButton").toggleClass("invisible");
  }

  $("#backButton").click(function() { 
    $(this).toggleClass("invisible");
    chart = new CanvasJS.Chart("drilldown", newVSSubmittededAssignmentsOptions);
    chart.options.data = assignmentsData["New vs Submitted Assignments"];
    chart.render();
  });

}