# Books-App
It's a book app where you can search for multiple books and purchase them.  
I use React-Redux for state management 


 **watch the below video**   
[App video](https://drive.google.com/file/d/1tUcalCpeSYGRFyf2Imd68vX-0fK9UW37/view?usp=sharing)

 ## File Structure 
* src
  * assets
  * components
  * navigation
  * screens
  * state
    * action_creators
    * reducers
 
 ## Environment setup for windows users
 * install [Node 12 LTS](https://nodejs.org/en/)
 * install [Vs code](https://code.visualstudio.com/)
 * use npm to install the Expo CLI command line utility  
  `npm install -g expo-cli`  
 
## How to run the app ?
1. clone the code
2. Open in Vs code 
   1. Open Vs code Terminal and run:  
   `npm install`
   2. When install *node_modules* then run  
   `npm start`
3. Open expo app in your mobile and scan the QR code to run the app.  

## App Screenshot
### Splash Screen
When App is open the Splash screen appears.
<table>
 <tr>
  <td>Simple splash screen </td>
   <td>Animation splash screen</td>
 </tr>
 <tr>
<td> <img src="https://user-images.githubusercontent.com/58082294/141053930-26033bba-b54f-4600-8644-b0e13908dc37.jpg" alt="Drawing"  width="150" height="300"/> </td>
<td> <img src="https://user-images.githubusercontent.com/58082294/141053932-a9f23494-6e67-436d-b40c-cdc559715dde.jpg" alt="Drawing"  width="150" height="300"/> </td>
</tr></table>
### Onboarding Screens 
The onboarding screen will appear only one time when you run the app the first time.
There are three onboarding screens.
<table>
 <tr>
  <td>Onboard first screen</td>
   <td>Onboard second screen</td>
     <td>Onboard third screen</td>
 </tr>
 <tr>
<td> <img src="https://user-images.githubusercontent.com/58082294/141053918-958b4cf5-eeed-4f65-9f0e-c6aeb3269d14.jpg" alt="Drawing"  width="150" height="300"/> </td>
<td> <img src="https://user-images.githubusercontent.com/58082294/141053926-f9411c9d-813d-4060-ab1f-338db87b5468.jpg" alt="Drawing"  width="150" height="300"/> </td>
 <td> <img src="https://user-images.githubusercontent.com/58082294/141053929-dd7e6f5a-0879-4c93-b800-188b38fc7bee.jpg" alt="Drawing"  width="150" height="300"/> </td>
</tr></table>

### Welcome screen
 After the onboarding screen, the welcome screen will appear.  
 
<img src="https://user-images.githubusercontent.com/58082294/141058684-12d70d68-54c3-48bf-81c8-c9edb817a3ed.jpg" alt="Drawing"  width="150" height="300"/>

### login screen
In Login Screen I applied formik and Yup validation. 
If a user forgets their Password then click on forget password then it will go to forget the password.
and if you have not account then click on signup.  
<img src="https://user-images.githubusercontent.com/58082294/141058468-ae0c4855-c657-4f78-9eb1-5e16e774e1fd.jpg" alt="Drawing"  width="150" height="300"/>

### Forget Password screen
In Forget Password screen you rest your password.  
<img src="https://user-images.githubusercontent.com/58082294/141058463-34af58fd-c180-41a1-813d-4a292950f440.jpg" alt="Drawing"  width="150" height="300"/>

### Signup screen

<table>
 <tr>
  <td>Signup screen </td>
   <td>signup validation</td>
 </tr>
 <tr>
<td><img src="https://user-images.githubusercontent.com/58082294/141058451-e16c30b9-20d4-48ab-a3b3-4d29638c151b.jpg" alt="Drawing"  width="150" height="300"/> </td>
<td><img src="https://user-images.githubusercontent.com/58082294/141058460-8c678699-4a1d-4e1d-861b-2598553d762e.jpg" alt="Drawing"  width="150" height="300"/> </td>
</tr></table>



### Home screen  
When the user sign-in/signup successfully then it will go to **Home screen**.In Home screen All books appear in FlatList, we can Search books by name.  
when the user click on any book then it goes to the Detail screen.  

<img src="https://user-images.githubusercontent.com/58082294/141060122-ee2b5649-b66b-48f0-9a05-09c93e84de87.jpg" alt="Drawing"  width="150" height="300"/>

### Detail screen  
In Detail, the screen have All details about the selected book and their purchase link you can purchase that book directly from them.
When users click on cart button then the book add to the cart.  

<img src="https://user-images.githubusercontent.com/58082294/141060134-958a1a9c-d80f-475f-9047-800ff3da03d5.jpg" alt="Drawing"  width="150" height="300"/>


### Cart screen  
In Cart screen have all the books that were added, we can delete them from the cart to click delete Icon 

<img src="https://user-images.githubusercontent.com/58082294/141060127-4fda072f-022e-4d85-b5eb-a0de000889ef.jpg" alt="Drawing"  width="150" height="300"/>


