<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>BAYF.com :(</title>
        <link rel="stylesheet" href="res/stylesheets/authenticationStyle.css">
    </head>
    <body>
        <div class="main-pane" style="background-color:#434343; text-align: center; color:red;">
            <img class="main-img" src="res/images/error.png">
            <%
                String status = request.getParameter("status");
            %>
            <h2><%=status%></h2>
            <button style="background-color: blue; color:white;" onclick="goBack()">Go back</button> 
        </div>
    </body>
    <script>
        function goBack(){
            window.history.back();
        }
    </script>
</html>
