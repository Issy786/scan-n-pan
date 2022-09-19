# Scan-N-pan-App

## Description

This App uses the Firebase database to fetch recipes for the user's list of ingredients. The app allows users to enter a list of ingredients and the app will fetch all the recipes that include all the ingredients inputted by the user.

The App has a Login page which uses Firebase Authentication feature, where the user can either login or sign up a new account.

Once logged in, the user will be directed to the home page. On the home page, the user will be given a list of all the recipes avaialble on the firebase database. The user can input an ingredient to the ingredients list by either manualy typing in an ingredient in the "add ingredient" input box or by clicking on the scan button where the user will be directed to the camera screen. Once in the camera screen, the user can simply scan the barcode of their item and that will give the name of the item and then the user can simply click on the add ingredient button and that will re-direct the user back to the home screen and add the item to the indgredient list.

The App allows the user to open a recipe by clicking on a recipe tile. Users can also sort the list of the recipes by 'clicking' on the sort by button and chosing an option. Users can sort the recipes by cooking time, name and rating. Each recipe has it's own page with cooking time, ingredients, amount of weight needed of each ingredient, directions for cooking, rating and all the reviews made on that recipe. Users can also rate and review recipes. To rate on a recipe, the user can just simply click on the amount of stars they wish to give to that recipe. To add a review, the user can just simply type their review in the review input box and click on the submit button.

## Link to API

- https://en.openfoodfacts.org/api/v0/product/barcode (the barcode from the scanned item)

## Node version

The minimum required version of Node to run this project is:

- Node: v18.3.0

## How to use

### Clone this repo

in the terminal run the following command:

`git clone https://github.com/Issy786/scan-n-pan.git`

### Installation

To run the App please install any necessary packages by running the following command in your terminal:

`npm install axios`

### Run the App locally

to run the app locally on ExpoGo, run the following command and scan the QR code on your smart phone:

`npm start`
