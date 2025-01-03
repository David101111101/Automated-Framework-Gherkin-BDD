Feature: Logging in

Scenario: Logs into the site

Given Im on the login page

When I fill the form with my email: "agent@phptravels.com" and my password: "demoagent"

Then I should see the dashboard page



@TestingMultipleLogIns
Scenario Outline: Scenario Outline to logging in

Given Im on the login page

When I fill the form with my <Email> and my <Password>

Then I should see the dashboard page

Examples:
| Email | Password |
| Davemaster@gmail.com | JS1111 |
| Davesecond@gmail.com | JS2222 |
| Davethird@gmail.com | JS23333 |