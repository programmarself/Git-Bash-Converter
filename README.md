# Git Bash Converter

---


## **📌 Introduction**  
The **Git Bash Code Converter** is a simple web-based tool that converts a given folder structure into equivalent Git Bash commands. This helps developers quickly generate directory structures and files using **`mkdir -p`** and **`touch`** commands.

---

## **🚀 Features**
✅ **Converts folder structures into Git Bash commands**  
✅ **Supports nested directories and multiple files**  
✅ **Allows copying the generated commands**  
✅ **Simple and responsive UI**  
✅ **Professional footer with developer credits**  

---

## **📂 Project Structure**  
```
image-gallery-flask/
├── app.py
├── templates/
│   └── index.html
├── static/
│   ├── images/  # Place your images here
│   └── styles.css  # Optional: for custom CSS
```

---

## **🛠️ Technologies Used**  
- **HTML** – Structure of the web app  
- **CSS** – Styling for a professional look  
- **JavaScript** – Converts input text to Bash commands  

---

## **💻 Installation & Usage**  

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/git-bash-code-converter.git
cd git-bash-code-converter
```

### **2️⃣ Open the Project in a Browser**  
Simply open `index.html` in a web browser.

---

## **📜 How It Works**  

### **🔹 Step 1: Enter Folder Structure**
Paste or type your desired folder and file structure in the input field. Example:
```
image-gallery-flask/
├── app.py
├── templates/
│   └── index.html
├── static/
│   ├── images/
│   └── styles.css
```

### **🔹 Step 2: Click "Convert"**
The tool will generate the corresponding **Git Bash commands**:
```bash
mkdir -p image-gallery-flask/templates image-gallery-flask/static/images
touch image-gallery-flask/app.py image-gallery-flask/templates/index.html image-gallery-flask/static/styles.css
```

### **🔹 Step 3: Copy & Use**
Click the **"Copy"** button to copy the commands and paste them into Git Bash.

---

## **📑 Code Breakdown**  

### **index.html (Main UI)**
- **Contains a textarea** for input.
- **Convert button** triggers conversion.
- **Copy button** copies the output.

### **styles.css (Styling)**
- Enhances UI appearance.
- Adds styling to buttons, text areas, and footer.

### **script.js (Functionality)**
- Reads input folder structure.
- Converts it into Git Bash commands.
- Displays the output and enables copy functionality.

---

## **📜 License**
This project is open-source under the **MIT License**.

---

## **👨‍💻 Developer Info**
- **Developed by:** Irfan Ullah Khan  
- **LinkedIn:** [linkedin.com/in/iukhan](https://www.linkedin.com/in/iukhan/)  
- **GitHub:** [github.com/programmarself](https://github.com/programmarself)  
- **Email:** [programmarself@gmail.com](mailto:programmarself@gmail.com)  

---

This documentation ensures that users can understand, install, and use the Git Bash Code Converter efficiently. 🚀 Let me know if you need any refinements! 😊
