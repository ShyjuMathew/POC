# Introduction

- This project is created to showcase how to implement file upload functionality with percentage display along with progress bar

## Technologies
-React : 18.3.1
-Node : 20.14.0

## Browse files

- Basic file type input tag is used for browsing system files for uploading
- An onChange event saves the selected file in a state with the handleFileChange function

## Uploading

- Button is created for initiating the upload process.
- handleFileUpload function is called that appends the file to a formData constant which is an optimal way of sending files
- try and catch method is used to handle both success and error cases
- axios is used for uploading the file to a dummy api

## Progress bar and Percentage

- axios post method provides an onUploadProgress event that gives data of how many bytes have been uploaded, we have used that to calculate the percentage of data that has been uploaded
- For showing progress bar we're using inline css as it's dynamically using the progress of upload and using it to show the bar accordingly
