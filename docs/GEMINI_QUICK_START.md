# 🚀 Quick Start - Gemini AI Integration

## ✅ Kamu Sudah Selesai Setup!

API Key sudah terpasang di `.env`. Sekarang tinggal pakai!

---

## 🎯 3 Cara Pakai Gemini AI

### **1. Test Page (Paling Mudah)**

Buka browser dan akses:
```
http://localhost:5173/#/test-ai
```

Di sini kamu bisa:
- ✅ Test AI langsung
- ✅ Tanya apa saja tentang portfolio
- ✅ Lihat streaming response real-time

---

### **2. AI Contact Helper (Praktis)**

Tambahkan ke Contact Page:

```typescript
// Di ContactPage.tsx
import AIContactHelper from '../components/AIContactHelper';

// Tambahkan di component:
<AIContactHelper />
```

**Use Case:**
- User bingung mau nulis apa
- AI generate pesan profesional
- Tinggal copy-paste ke WhatsApp!

---

### **3. Custom Implementation**

Pakai langsung di component manapun:

```typescript
import { generateAIResponse } from '../utils/gemini';

// Simple query
const answer = await generateAIResponse('Jelaskan apa itu POS system');

// Streaming (like ChatGPT)
await generateAIStreamResponse(
  'Apa keuntungan punya website?',
  (chunk) => {
    console.log(chunk); // Muncul kata per kata
  }
);

// Chat with memory
const chat = new GeminiChat();
const response1 = await chat.sendMessage('Halo!');
const response2 = await chat.sendMessage('Apa yang baru saja saya katakan?');
// AI ingat percakapan sebelumnya!
```

---

## 💡 Use Case Ideas

### **1. Project Explainer**
```typescript
const prompt = `Jelaskan project ini dalam bahasa sederhana: ${project.description}`;
const explanation = await generateAIResponse(prompt);
```

### **2. Service Recommender**
```typescript
const prompt = `
User butuh: ${userNeeds}
Dari service ini: ${services}
Rekomendasikan yang paling cocok.
`;
```

### **3. FAQ Auto-Answer**
```typescript
const prompt = `
Pertanyaan: ${userQuestion}
Jawab berdasarkan info ini: ${portfolioInfo}
`;
```

### **4. Smart Contact Form**
```typescript
const prompt = `
Generate professional response untuk inquiry ini:
${userMessage}
`;
```

---

## 🎨 Available Components

### **AIAssistant** (Full Featured)
- Chat interface lengkap
- Streaming support
- Error handling
- Loading states

**Lokasi:** `components/AIAssistant.tsx`

### **AIContactHelper** (Specialized)
- Generate pesan profesional
- Copy to clipboard
- User-friendly

**Lokasi:** `components/AIContactHelper.tsx`

---

## 🔥 Next Steps

1. **Test di Browser:**
   ```
   http://localhost:5173/#/test-ai
   ```

2. **Integrate ke Contact Page:**
   ```typescript
   import AIContactHelper from '../components/AIContactHelper';
   ```

3. **Custom Use Cases:**
   - Project recommendations
   - Service matching
   - FAQ automation
   - Content generation

---

## 📊 API Limits (Free Tier)

- ✅ **60 requests/minute**
- ✅ **1,500 requests/day**
- ✅ **Gratis selamanya!**

---

## 🐛 Troubleshooting

### Error: "API key not found"
```bash
# Pastikan file .env ada dan berisi:
GEMINI_API_KEY=your_actual_key_here

# Restart dev server:
npm run dev
```

### Error: "Failed to fetch"
- Check internet connection
- Verify API key valid
- Check rate limits

---

## 📚 Documentation

- **Full Guide:** `docs/GEMINI_INTEGRATION.md`
- **API Docs:** https://ai.google.dev/docs
- **Examples:** `components/AIAssistant.tsx`

---

## ✨ Tips

1. **Be Specific:** Prompt yang jelas = hasil lebih baik
2. **Use Context:** Kasih info relevan di prompt
3. **Test First:** Coba di test page dulu
4. **Handle Errors:** Always use try-catch

---

**Siap dicoba!** 🚀

Buka: `http://localhost:5173/#/test-ai`
