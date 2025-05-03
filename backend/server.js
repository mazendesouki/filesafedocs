const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// الاتصال بقاعدة البيانات
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ تم الاتصال بقاعدة البيانات"))
.catch((err) => console.error("❌ خطأ في الاتصال بقاعدة البيانات:", err));

// مسار تجريبي للتأكد من عمل السيرفر
app.get("/", (req, res) => {
  res.send("🎉 FileSafeDocs API تعمل بنجاح");
});

// مثال على مسار الإحصائيات للمشرف
app.get("/api/admin/stats", async (req, res) => {
  try {
    const filesCount = 123;
    const downloadsCount = 456;
    const activeSubscriptions = 78;
    res.json({ filesCount, downloadsCount, activeSubscriptions });
  } catch (error) {
    res.status(500).json({ error: "خطأ في الإحصائيات" });
  }
});

// بدء السيرفر
app.listen(PORT, () => {
  console.log(`🚀 السيرفر يعمل على http://localhost:${PORT}`);
});