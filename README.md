# How to run the code?
*make sure that you have the node instaled

- Install yarn:
npm install --global yarn

- Inside the project folder, Install the dependencies running:
yarn install

- Run the code
yarn run dev

# How to run the tests?
For demonstration I implemented a unit test to test the search filter
- to run the test just run:
yarn jest


# How the code is organized?
The code was organized containing the pages inside the pages folder with 
the local components in the same folder, global components in the 
components folder and also the utils folder containing some tools.

The search works through the URL, so when do a search you are redirected 
to the results page where the code collects the parameters in the url and 
filters the api data through it.

To get the data from the table I use a function in the file that readCSV and after that I filter it using a function inside filterTools

After that, if there is valid data, I save it in a state and make a map rendering the result with the itemResoult component.


# What would you have done differently if you had more time? Why?
It would create a slightly better documentation defining types, 
function and component inputs and returns.

As it is a research App, there are many possibilities when it comes to scale, so
in a project like this I would plan it thinking about where it would grow, thinking 
this way to create a code with the correct level of abstraction, without it becoming
too abstract to the point of making it difficult to understand or "glued" making 
maintenance difficult, could also use Typescript which would help maintain the quality
of the code as it continues to grow.

Now looking at it just as a test, for example, in the research part, you could create a 
"recent history" using the browser's local-storage, further improving responsiveness by 
adapting it to less common devices, such as a smartwatch.



- Thank you very much in advance! 
@Vanilson Silva.


