# How to run the code?
*make sure that you have the node instaled

1. **Install Yarn:**
   ```sh
   npm install --global yarn
   ```

2. **Install Project Dependencies:**
   inside the project folder run:
   ```sh
   yarn install
   ```

3. **Run the Project:**
   ```sh
   yarn run dev
   ```


## How to Run the Tests
For demonstration purposes, a unit test has been implemented 
to test the search filter functionality.

To run the tests, execute the following command:
```sh
yarn jest
```


## Code Organization
The project structure is organized as follows:

- **Pages:** Contained within the `pages` folder, with local components residing in the same folder.
- **Global Components:** Stored in the `components` folder.
- **Utilities:** Available in the `utils` folder, which contains various tools.

### Search Functionality
The search feature operates via the URL:
1. Upon performing a search, you are redirected to the results page.
2. The code on results page collects parameters from the URL and filters the API data accordingly.
3. Data retrieval from the table is handled by a function in the `readCSV` file.
4. Filtering is performed using a function from `filterTools`.
5. If valid data is found, it is stored in the state and rendered using the `itemResult` component.



## Potential Improvements with More Time
Given more time, the following enhancements could be made:

1. **Improved Documentation:**
   - Define types, function and component inputs, and returns more clearly.

2. **Scalability Planning:**
   - Develop the code with the appropriate level of abstraction, ensuring it is neither too abstract nor overly rigid, facilitating easier maintenance.
   - Consider using TypeScript to maintain code quality as the project grows.

3. **Additional Features:**
   - Implement a "recent history" feature using the browser's local storage.
   - Improve responsiveness for less common devices, such as smartwatches.

---

Thank you very much in advance!

@Vanilson Silva