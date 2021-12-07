# _{Friday Week 13 - Tap Room - Kombutcha Lounge}

### By _{Becket Harvey}_


#### _Technologies Used_
* CSS
* HTML
* JavaScript
* React.js


## Description _This project presents a fictional Kombutcha lounge that allows a user to add custom kegs including name, brand, price, and quantity of pints (suggested 124 default). It allows a user to view Keg details and contains the ability to subtract pints from a keg as if selling them. Pints can be re-added as well, buttons disable when kegs are full or empty. A button to completely empty a keg is included._



## Setup/Installation Requirements
 - Clone or download the zip file of this repository to your desktop
 - Navigate into the top level directory
 - Open in your code editor
 - Create a .gitignore file that includes the following:
>
>*/obj/
>*/bin/
>*/appsettings.json

 - Commit and push your .gitignore file to your repo
 - Create a file named "appsettings.json" in the root directory add the following code to the appsettings.json file:
>{
>  "ConnectionStrings": {
>      "DefaultConnection": "Server=localhost;Port=3306;database=brandon_eads;uid=root;pwd=[YOUR-PASSWORD-HERE];"
>  }
>}
 - Replace [YOUR-PASSWORD-HERE] with your unique MySql password
 - 
 - Launch the MySql server:
 - In the terminal, run the command "$ mySql -uroot -p[YOUR-PASSWORD-HERE]", replacing [YOUR-PASSWORD-HERE] with your   unique MySql password

 - Insert your MySQL password and user Id
 - Make sure to have .NET 5.0 installed
 - Run `$ dotnet restore` to install bin & obj folders
 - Make sure to have EntityFrameworkCore.Design 5.0 added and dotnet ef installed globally


## Additional Steps
* In your terminal navigate to the main project folder.
* If Migrations folder is not present run $ dotnet ef migrations add Initial to add Migrations folder
* Then run $ dotnet ef database update to create the schema
* Navigate to the main project folder in the command line or terminal
* Run the command `dotnet restore` to restore the project dependencies
* Run the command `dotnet build` to build and compile the project
* Run the command `dotnet run` to start the live server to view the project

## Users vs Non-Users/Password Requirements
* Non-User accounts have view-only access to created flavors and treats
* User accounts are able to create, edit, and delete access to their own personally created flavors and treats. Treats and flavors have a many-to-many relationship.
* Password requirements are lax and do not require alpha-numeric characters, uppercase letters, or a length. This can be adjusted in the Startup.cs


## Known Bugs
* _relationships can be deleted by non-users_

## License
_{MIT}_ This is open source for anyone to use and I am not responsible for any problems resulting from its use or implementation

## Contact Information

| Author | GitHub | Email |
|--------|:------:|:-----:|

| [Becket Harvey](https://www.linkedin.com/in/becket-harvey-sunshine/) | [SunshinePunch](https://github.com/SunshinePunch) |