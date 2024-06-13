Feature: Login

    Scenario: Validate that the user admin exists
        Given The user enters DemoBlaze
        When The user log in with username "admin" and password "admin"
        Then The user should be logged in successfully

    Scenario: Validate the required fields
        Given The user enters DemoBlaze
        When The user log in without username and password
        Then A message should be displayed with the text "Please fill out Username and Password."

    Scenario: Validate an inexistent user
        Given The user enters DemoBlaze
        When The user log in with an inexistent username and password
        Then A message should be displayed with the text "Invalid username or password"

    Scenario: Validate logout
        Given The user enters DemoBlaze
        When The user log in with username "admin" and password "admin"
        And The user logs out
        Then The user should be logged out