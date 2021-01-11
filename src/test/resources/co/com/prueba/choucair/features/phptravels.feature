#Author: your.email@your.domain.com

#@tag:prueba
Feature: phptravels.net

  As a test automation
  I want to use phptravels.net
  to add blog categories
  
  
   Scenario Outline: login in the page phptravels <description>
  
    Given that user wants login in the page phptravels
    When he add categories in phptravels page and post <scenarioNumber>
    Then he should see title blog in the screen
    
    Examples:
    |description|scenarioNumber|
    |login|2|
    
    
  
  #Scenario Outline: add categories in the option blogs <description>
    #Given that user wants add categories  
    #When he add data in the categories <scenarioNumber>
    #Then he should see title test in the screen
    
    

  #Scenario: add posts in the option blogs
    #Given that user wants add posts
    #When he add data in the posts
    #Then he should see title test in the screen