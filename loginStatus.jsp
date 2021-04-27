<%@page import="databaseHandler.OES_Database" session="false"%>
<%
    String loginID = request.getParameter("loginID");
    String password = request.getParameter("password");
    
    OES_Database oesDatabase = new OES_Database();
    if(oesDatabase.isValidUser(loginID, password)){
        HttpSession newSession = request.getSession();
        newSession.setAttribute("userID", loginID);
        response.sendRedirect("learner.jsp");
    }
    else{
        %>
<jsp:forward page="errorPage.jsp">
    <jsp:param name="status" value="Invalid login credential :("></jsp:param>
</jsp:forward>

        <%
    }
    oesDatabase.close();
        %>