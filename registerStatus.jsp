<%@page import="java.time.LocalDate"%>
<%@page import="databaseHandler.OES_Database"%>
<%
    String customerID = request.getParameter("userID");
    String fname = request.getParameter("first_name");
    String lname = request.getParameter("last_name");
    String emailID = request.getParameter("email_id");
    LocalDate birthdate = LocalDate.parse(request.getParameter("birthdate"));
    String userType = request.getParameter("user_type");
    String qualification = request.getParameter("qualification");
    String password = request.getParameter("password");
    OES_Database oesDatabase = new OES_Database();
    char userTypeValue = 'L';
    if(userType.equals("Teacher")){
        userTypeValue='T';
    }
    oesDatabase.addUser(customerID,password, fname, lname, birthdate, qualification, userTypeValue, emailID);
    oesDatabase.close();
%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>OES-Online Education System :: Registered :)</title>
        <link rel="stylesheet" href="res/stylesheets/authenticationStyle.css">
    </head>
    <body>
        <div class="main-pane">
            <img class="main-img" src="res/images/registered.png">
            
            <h2>Registered successfully :)</h2>
            <a href="login.html">
                <button style="background-color: blue; color:white;">Login</button>
            </a> 
        </div>
    </body>
</html>
