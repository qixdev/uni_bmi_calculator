# **BMI Calculator Web Application**

## **Description**  
This is a project for Backend development class.

A **BMI Calculator** built using **Node.js**, **Express.js**, and **Bootstrap**. 

This application allows users to calculate their BMI based on height, weight, age, and 

gender, with support for both **metric** and **imperial** units.

The app also features a history tracker for past BMI calculations.

Also the app is responsive.

---

## **Installation and Setup**

### **1. Clone the Repository**  
```bash
git clone https://github.com/qixdev/bmi-calculator.git
cd bmi-calculator
```

### **2. Install Dependencies**  
```bash
npm install
```

### **3. Run the Server**  
```bash
node root.js
```

### **4. Access the Application**  
Open your browser and go to:  
```
http://localhost:3000/
```

---

## **Dependencies**
- express
- moment
- body-parser

To install dependencies manually:  
```bash
npm install express body-parser moment
```

---

## **Project Structure**

```plaintext
bmi-calculator/
├── public/             
│   ├── bmiCalculator.html
│   ├── styles.css
│   ├── script.js
├── routes/              
│   ├── bmiRoutes.js
├── core/               
│   ├── bmiLogic.js
├── views/               
├── node_modules/      
├── package.json        
└── root.js             
```

---

## **Available Routes**

`GET /` - Serves the main BMI calculator page 
`POST /bmicalculator` - Processes BMI calculation        
`GET /bmicalculator/history` - Displays past BMI calculations

---

## **BMI Interpretation**

- **Underweight:** BMI < 18.5  
- **Normal weight:** 18.5 ≤ BMI ≤ 24.9  
- **Overweight:** 25 ≤ BMI ≤ 29.9  
- **Obesity:** BMI ≥ 30  

---

## **Future Improvements**

- Add user authentication for personal BMI history storage.  
- Support for saving data in a database.  
- Enhanced visualization for BMI trends.

---

## **Authors**

**IT 2307**

**- Ruslan Kim**  
**- Danial Baitakov**  

