# 📁 FileSafeDocs

![status](https://img.shields.io/badge/status-ready-brightgreen)
![license](https://img.shields.io/badge/license-MIT-blue)
![node](https://img.shields.io/badge/node-18.x-green)
![react](https://img.shields.io/badge/react-18.2.0-blue)
![version](https://img.shields.io/badge/version-v1.0.0-informational)
![contributions](https://img.shields.io/badge/contributions-welcome-orange)
![platform](https://img.shields.io/badge/platform-node%20%26%20react-blue)
![issues](https://img.shields.io/github/issues/mazendesouki/filesafedocs)
![stars](https://img.shields.io/github/stars/mazendesouki/filesafedocs)

منصة متقدمة لحفظ ومشاركة الملفات بطريقة آمنة ومنظمة.  
موجهة للمستخدمين الأفراد، الشركات، الأكاديميات، المتاجر الرقمية، والاستشاريين — مع لوحات تحكم مخصصة لكل فئة.

---

## 🎯 مميزات النظام

- 🔐 روابط تحميل مؤمنة بكلمة مرور وصلاحية انتهاء
- 📊 لوحة مشرف عامة تحتوي على إحصائيات الملفات والتحميلات والاشتراكات
- 🏢 تقسيم المستخدمين حسب النوع (شركة، أكاديمية، متجر، استشاري)
- 🤖 تكامل مع واتساب لتصفح الملفات مباشرة بكلمة "ملفاتي"
- 📩 تنبيهات عند التحميل ورسائل تحقق للاشتراكات
- 🗃️ تصنيفات متعددة داخل كل قسم
- 🌍 واجهة مستخدم عربية كاملة ودعم RTL

---

## 🚀 خطوات التشغيل

### 🛠️ 1. تشغيل الواجهة الخلفية (Backend)

```bash
cd backend
npm install
# أضف ملف .env يحتوي على بيانات الاتصال
npm run dev
```

#### 📄 محتوى ملف `.env`:
```
MONGODB_URI=your_mongo_connection_string
PORT=5000
```

---

### 💻 2. تشغيل الواجهة الأمامية (Frontend)

```bash
cd frontend
npm install
npm start
```

يفتح على: `http://localhost:3000`

---

## 🔗 روابط الصفحات

- `/user` → لوحة المستخدم
- `/admin` → لوحة المشرف
- `/admin/companies` → الشركات
- `/admin/academies` → الأكاديميات
- `/admin/stores` → المتاجر
- `/admin/consultants` → الاستشاريين

---

## 🧠 ملاحظات

- جميع البيانات في الوقت الحالي **تجريبية Mock** ويمكن ربطها بقاعدة MongoDB بسهولة.
- البنية تدعم التوسعة المستقبلية لأي قسم أو نوع مستخدم إضافي.

---

## 🛡️ جميع الحقوق محفوظة لـ Smart Tasawaq © 2025