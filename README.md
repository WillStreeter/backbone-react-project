# backbone-react-project
IP locations from USA

### How to install and build this app

**This was built with node LTS 12.13.0**

##### 1) If you have docker and can run Make files
  ```
   $> git clone https://github.com/WillStreeter/backbone-react-project.git
   $> cd backbone-react-project/client
   // build node_modules
   $ backbone-react-project/client > npm install
   // to stand the site up we will return to the root directory
   $backbone-react-project > make start-dev
    // open another terminal tab to view logs
    // from backbone-react-project
   $backbone-react-project > cd client
   $backbone-react-project/client > make logs
   // to stop docker containers and bring the env down 
   // from backbone-react-project
   $backbone-react-project > make stop-dev
```
#### 2) If you have docker and do Not Have the ability to run Make files
  ```
   $> git clone https://github.com/WillStreeter/backbone-react-project.git
   $> cd backbone-react-project/client
   // build node_modules
   $ backbone-react-project/client > npm install
   // to stand the site up we will return to the root directory
   $backbone-react-project> docker-compose up -d
    // open another terminal tab to view logs
    // from backbone-react-project
   $backbone-react-project > make logs
   // to stop docker containers and bring the env down 
   // return the original tab
   $backbone-react-project > docker-compose down
```

##### 3) If you choose to run node localing on your machine
```
   $> git clone https://github.com/WillStreeter/backbone-react-project.git
   $> cd backbone-react-project/client
   $> npm install
   $> npm run start
```

### How to run the app
1) You will need to user you own key from [register for developer access key from IpApi](https://ipapi.com/documentation)
2) open a browser and go to [localhost:3000](http://localhost:3000)
3) The first view that appears is where you should insert your the key created in the first step
4) Once the key is correctly input the next view will surface a Selectable List of country
   Each country has an associated IP address located in the perspective country
5) Once the country is selected, the ip address will be used to fetch to request the information of the ip address
6) The longitude and latitude attributes in the response will be used to calculate the 
   this distance from the longitude and latitude of Washington D.C. in the Unites States
   
   **Please Note:** The distance is calculated in a direct line commonly referred to 
   "as the crow flies"


### How is the APP structured
Before code abstraction begin, especially during the early stages of development I have
found that it is important to maintain a "separation of concerns". With this as the basis of the
structure:

#### visual_layer: 
 Actual React implementations are placed in this directory. **Components** are kept "dumb" or free from
 the complexities of communicating with global state. When ever possible they are stateless functional 
 components or Pure Components. If state is needed React Hooks are used. **Containers** are used 
 to directly communicate with global state through "business_layer's mapStateToProps and mapDispatchToProps" 

#### buisness_layer: 
  - This directory contains:
    - **connect_services**: Global State Connections that can be used by multiple visual_layer containers
   
    - **data_layer_services**: Handling re-usable and cross-cutting concerns used by the **data_layer**
    
    - **visual_layer_services**: Handling re-usable and cross-cutting concerns used by the **visual_layer**
    
#### data_layer:
   - This directory contains:
     - **api_services**: Wraps AJAX services for communicating with remote clients
    
     - **redux_services**: Contains all the various services used to handle Redux Services
    
       - Actions ( Pure Functions and specific Action Types )
       - Epics ( [redux-observales](https://redux-observable.js.org/) is used to handle side effects, such
           as asynchronous processes.
       - Reducer ( enables the create of branch and attributes of state)
       - Selectors ([reselect](https://github.com/reduxjs/reselect) is used to get the most current state and
          maximized the ability to create dynamic date based on 1 or more states.
