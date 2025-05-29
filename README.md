⚖️ Lawgorithm – Legal Documentation Assistant
---------------------------
Your one-stop platform for smart legal document generation, expert legal guidance, and AI-powered chat support — built to simplify legal workflows for individuals and businesses.

🧩 Problem Statement
---------------------------
Legal documentation is often a slow, expensive, and confusing process. Many individuals and businesses struggle with:
Understanding legal terminology.
Finding the right document templates.
Accessing reliable legal guidance.
Customizing contracts based on roles like HR, SEO, or Accounting.
Lawgorithm solves this by combining AI, automation, and legal networks to deliver accurate, personalized legal documentation — in minutes, not days.

💡 Approach & Solution
---------------------------
We designed Lawgorithm to be modular, user-friendly, and legally aware. Our solution consists of three main pillars:
Document Generator
Users select a role (e.g., HR, Accountant).
Input context via a smart form.
AI generates a tailored legal document in PDF/DOCX format.

AI Chatbot Assistant
---------------------------
Powered by GPT.
Helps users understand documents.
Explains legal terms, formats, and suggestions.

Lawyer Connect (Corner of Experts)
---------------------------
Curated network of legal advisors.
Users can reach out directly for legal reviews or advanced help.
Together, these modules offer fast, accurate, and accessible legal support.

✨ Features
---------------------------
🔠 Role-Based Document Templates (HR, SEO, Finance, etc.)
💬 AI Chatbot to assist in drafting and legal Q&A.
📄 PDF/DOCX Document Generation
👩‍⚖️ Lawyer Recommendations & Connect Panel
🔒 Secure storage of documents
🧠 OpenAI/GPT integration for contextual legal intelligence
🌐 Responsive Frontend UI with React
🎯 Error handling, validations & smooth UX flow

🧰 Tech Stack
---------------------------
Layer	Technology
Frontend - 	React.js, TailwindCSS ; 
Backend - 	Node.js, Express.js;
AI Integration	- OpenAI GPT (Chatbot, drafting);
Database - 	MongoDB;
Document Gen	- PDFKit, DOCX Template Engine;
Authentication - Firebase/Auth0;

![Screenshot 2025-05-29 110323](https://github.com/user-attachments/assets/0cf905d9-d1c9-48d1-aa2c-45121560523d)
![Screenshot 2025-05-29 110345](https://github.com/user-attachments/assets/cf8a6548-16bc-4647-8688-516d45ce6948)
![Screenshot 2025-05-29 110405](https://github.com/user-attachments/assets/8b0c81d3-f5c0-4513-889e-fea7eaf1454e)
![Screenshot 2025-05-29 114441](https://github.com/user-attachments/assets/dbf5c451-05b0-443b-9dcb-0ae9aab888fe)
![Screenshot 2025-05-29 114513](https://github.com/user-attachments/assets/a6f8564f-90d3-46d1-8704-ce0602479337)
![Screenshot 2025-05-29 114552](https://github.com/user-attachments/assets/5014276f-3f79-4c9a-966b-02b009e88867)


User Interaction :
---------------------------
User Visits Homepage
Views landing page with introduction and options.
Selects Role or Use Case
HR, SEO, Accountant, or other legal documentation categories.
Document Generation Form
User fills a dynamic form tailored to their role (e.g., employment offer letter for HR).
Form collects contextual data (name, company, duration, legal terms, etc.)
Optional Chatbot Support
Can ask legal questions.
Get real-time suggestions for form fields or explanations.
AI Processes Request
Passes form data to backend.
OpenAI GPT + templates generate legal content.
Document Output
Generated as PDF/DOCX.
Option to download, preview, or send to a lawyer.
Lawyer Connect (Optional)
User can choose a lawyer from the “Corner of Experts”.
Initiates secure communication.


⚙️ Run Instructions
---------------------------
Clone the project:

git clone https://github.com/vsudeshchandra/PROJECT-NAME.git
cd legal-documentation-assistant

▶️ Backend Setup
-------------------------
cd server;
npm install;
npm start;

Make sure you add your .env file with:
-------------------------
OPENAI_API_KEY;
MONGO_URI;
PORT;

🖥 Frontend Setup
---------------------------
cd client;
npm install;
npm start;
Edit the API base URL in api.js if needed.;
