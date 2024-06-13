@signUp @regression
Feature: Sign up

    Scenario: Create a new user and log in
        Given The user opens DemoBlaze
        When  The user signs up with username "<username>" and password "<password>"
        And The user logs in with username "<username>" and password "<password>"
        Then The user should be logged in

        Examples:
            | username        | password  |
            | userpruebahugo1312 | password1 |


    Scenario: Validate the inputs
        Given The user opens DemoBlaze
        When The user tries to sign up without username and password
        Then A message should be displayed with the error "Please fill out Username and Password."
    
    Scenario: Validate that the user cant sing up with an existing username
        Given The user opens DemoBlaze
        When The user tries to sign up with username "usuario" and password "usuario"
        Then A message should be displayed with the error "This user already exist."