# Introduction

This project is created to demonstrate how we can extract system environment variables in ReactJS.

## Technologies
-React : 18.3.1
-Node : 20.14.0

## System Environment Variables

- System environment variables are different from environment variables
- Unlike environment variables, system environment variables are not available in the project folder. Instead, they're present on system level.

### Setting System Environment Variables

*Note*
- Make sure to lead the key name with REACT_APP as ReactJS requires it in the beginning of variables for accessing them. For example if you want to set key TEST_VALUE, you need to name it REACT_APP_TEST_VALUE
- Make sure that any key in your .env file of project root folder doesn't match the system environment variables, otherwise the .env variable will take priority.
- You may use .env variables and system variables in combination.

**Windows**

- Create a new file with name 'system_env.txt' and paste all key value pairs (eg : REACT_APP_TEST=Test value), go to the next line without comma separation for adding a new key.
- Open command prompt as administrator, and navigate to the folder where you have created the 'env_stage_braninvire.txt' file
- Run this command : for /f "tokens=1,* delims==" %i in (system_env.txt) do setx %i "%j" /M
(The above command reads the .txt file and adds the key value pair in the system environment variables)
- Right-click on "This PC" or "Computer" on your desktop or in File Explorer.
- Select "Properties."
- Click on "Advanced system settings" on the left.
- In the System Properties window, click the "Environment Variables..." button.
- Here, you can verify your environment variables for the current user or the system.
- Restart system

**Ubuntu**

- Open terminal and write 'sudo nano /etc/environment', hit enter, this will bring up the edit mode.
- Paste all key value pairs (eg : REACT_APP_TEST=Test value), go to the next line without comma separation for adding a new key.
- Restart system
- You'll now be able to access the environment variables with process.env.[variable name]

### Accessing System Environment Variables

- For accessing the variables you can use process.env, for example if your key name is REACT_APP_TEST_VALUE, you can access it with process.env.REACT_APP_TEST_VALUE throughout your project.

