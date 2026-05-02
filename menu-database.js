// ฐานข้อมูลเมนูอาหารสำเร็จรูป
const menuDatabase = [
  {
    menuName: "ข้าวไข่เจียว",
    ingredients: [
      { name: "ข้าวสวย", category: "ข้าว-แป้ง", portion: "1 ทัพพี", qty: 3, weight: "55" },
      { name: "ไข่ไก่", category: "เนื้อสัตว์ (ไขมันปานกลาง)", portion: "1 ฟอง", qty: 1, weight: "50" },
      { name: "น้ำมันพืช", category: "ไขมัน (PUFA)", portion: "1 ช้อนชา", qty: 2, weight: "5" }
    ]
  },
  {
    menuName: "ข้าวกะเพราหมูสับ",
    ingredients: [
      { name: "ข้าวสวย", category: "ข้าว-แป้ง", portion: "1 ทัพพี", qty: 3, weight: "55" },
      { name: "หมูสับ", category: "เนื้อสัตว์ (ไขมันสูง)", portion: "2 ช้อนโต๊ะ", qty: 2, weight: "30" },
      { name: "น้ำมันพืช", category: "ไขมัน (PUFA)", portion: "1 ช้อนชา", qty: 2, weight: "5" },
      { name: "ใบกะเพรา/พริก/กระเทียม", category: "ผัก ก.", portion: "ตามชอบ", qty: 1, weight: "-" }
    ]
  },
  {
    menuName: "ก๋วยเตี๋ยวราดหน้าหมู",
    ingredients: [
      { name: "เส้นใหญ่", category: "ข้าว-แป้ง", portion: "1 ทัพพี", qty: 3, weight: "50" },
      { name: "เนื้อหมู (ไม่ติดมัน)", category: "เนื้อสัตว์ (ไขมันต่ำ)", portion: "2 ช้อนโต๊ะ", qty: 2, weight: "30" },
      { name: "คะน้า", category: "ผัก ข.", portion: "1 ทัพพี", qty: 1, weight: "50" },
      { name: "น้ำมันพืช", category: "ไขมัน (PUFA)", portion: "1 ช้อนชา", qty: 1, weight: "5" },
      { name: "แป้งมัน (ทำน้ำราดหน้า)", category: "ข้าว-แป้ง", portion: "1 ทัพพี", qty: 1, weight: "-" }
    ]
  },
  {
    menuName: "สลัดไก่ย่าง",
    ingredients: [
      { name: "อกไก่ย่าง", category: "เนื้อสัตว์ (ไขมันต่ำมาก)", portion: "2 ช้อนโต๊ะ", qty: 3, weight: "30" },
      { name: "ผักกาดแก้ว/แตงกวา/มะเขือเทศ", category: "ผัก ก.", portion: "ตามชอบ", qty: 1, weight: "-" },
      { name: "แครอท/หอมหัวใหญ่", category: "ผัก ข.", portion: "1 ทัพพี", qty: 1, weight: "50" },
      { name: "น้ำสลัดน้ำใส", category: "ไขมัน (PUFA)", portion: "1 ช้อนชา", qty: 3, weight: "5" }
    ]
  },
  {
    menuName: "ชานมไข่มุก (ตัวอย่างระบุแคลอรีเอง)",
    ingredients: [
      { name: "น้ำชา", category: "ผัก ก.", portion: "1 แก้ว", qty: 1, weight: "-" }, // ผัก ก. คือ 0 แคล (อนุโลมใช้เป็นน้ำเปล่า/น้ำชา)
      { name: "น้ำตาลทราย", category: "น้ำตาล", portion: "1 ช้อนชา", qty: 6, weight: "30" },
      // 👇 ระบุ C P F K เองได้เลย (ถ้าหมวดหมู่เป็น รายการกำหนดเอง)
      { name: "ไข่มุก", category: "รายการกำหนดเอง", portion: "1 ส่วน", qty: 1, weight: "-", c: 30, p: 0, f: 0, k: 120 },
      // 👇 ถ้ารู้แค่แคลอรี (Kcal) ให้ใส่ c:0, p:0, f:0 แล้วระบุ k ได้เลย
      { name: "ครีมเทียม", category: "รายการกำหนดเอง", portion: "1 ส่วน", qty: 1, weight: "-", c: 0, p: 0, f: 0, k: 150 }
    ]
  },
  {
    menuName: "ข้าวมันไก่",
    ingredients: [
      { name: "ข้าวมัน", category: "รายการกำหนดเอง", portion: "1 ทัพพี", qty: 3, weight: "55", c: 18, p: 2, f: 5, k: 125 }, // ข้าวมัน 1 ทัพพี (ข้าว+น้ำมัน)
      { name: "ไก่ต้ม (ติดหนัง)", category: "เนื้อสัตว์ (ไขมันสูง)", portion: "2 ช้อนโต๊ะ", qty: 3, weight: "30" },
      { name: "น้ำจิ้มข้าวมันไก่", category: "รายการกำหนดเอง", portion: "1 ช้อนโต๊ะ", qty: 2, weight: "-", c: 5, p: 0, f: 1, k: 30 }
    ]
  },
  {
    menuName: "อเมริกาโน่",
    ingredients: [
      // 👇 ใส่ c: 0, p: 0, f: 0 และใส่แคลอรีรวมที่ k ได้เลย
      { name: "อเมริกาโน่", category: "รายการกำหนดเอง", portion: "1 แก้ว=240 มิลลิลิตร ", qty: 1, weight: "-", c: 0, p: 0, f: 0, k: 15 }
    ]
  }
];