# TEXTRACTION : Get insights easily

Textraction is a project which developed for the learning purpose, However it is a good project. By using textraction a person can easily get insights on a single click. It is NLP based project which extracts useful higher level infromation from the document , email , blog etc which can be used for different purposes.

## Getting Started

Following are the steps to setup the project.

```
Step1 : Clone repository on your local machine.
Step2 : Create an account on Aylien Text analysis Api and get app id and key.
Step3 : save api id and key in .env file as shown in prerequisites section.
step4 : In root directory (which contains "package.json") run command "npm install"
step5 : run command "npm run build-prod"
step6 : run command "npm start"
step7 : run command "npm start" , A message will be displayed on terminal i.e "App listening on port 8080!"
step8 : Open web browser and type "localhost:8080" And thats It ..

```


### Prerequisites

What things you need to Setup and run Textraction Web application on your local Machine

```
Create an account on Aylient Text analysis Api and get app id and key.

- Create .env file in root directory
- Add user id and key in .env file as shown below :
API_ID=<your API id>
API_KEY=<your API key>

```
Install node and then use npm install it will fetch all the dependencies for project.
```

### Project Features

Note : Following are some recommendations for better result : 
1- Classification (Input type : Text is recommended) , If you failed to find result in classification then try Classification by Taxanomy Category , It is better for large blogs and documents.

```
Classification
```
Knowing the high-level semantic category of an unlabelled document such as a webpage or article can be extremely helpful in various applications. The Classification endpoint helps you categorize any text or URL according to a predefined taxonomy.

Note : It is recommended to use Text option for this Category

```
Classification By taxonomy
```
Knowing the high-level semantic category of an unlabelled document such as a web page or article can be extremely helpful in different applications. The Classification by Taxonomy endpoint helps you categorize any text or URL according to various classification schemes and taxonomies 

```
Semantic Analysis
```
Extracting sentiment from a piece of text such as a tweet, a review or an article can provide us with valuable insight about the author's emotions and perspective: whether the tone is positive, neutral or negative, and whether the text is subjective (meaning it's reflecting the author's opinion) or objective (meaning it's expressing a fact). Our Sentiment Analysis endpoint is built exactly for this purpose.

```
Summarization
```
The Summarization endpoint provides an easy way of summarizing a document such as a news article or blog post into a few key sentences. You can specify the length of the summary via the sentences_number or sentences_percentage parameters.