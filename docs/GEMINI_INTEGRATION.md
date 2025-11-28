# 🤖 Gemini AI Integration Guide

## 📋 Setup Instructions

### 1. Get Your Gemini API Key

1. Visit: https://aistudio.google.com/app/apikey
2. Login with your Google account
3. Click **"Create API Key"** or **"Get API Key"**
4. Select a project (or create new one)
5. Copy the API key

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and replace `your_api_key_here` with your actual API key:
   ```env
   VITE_GEMINI_API_KEY=AIzaSy...your_actual_key_here
   ```

3. Restart your dev server:
   ```bash
   npm run dev
   ```

---

## 🚀 Usage Examples

### Example 1: Simple AI Response

```typescript
import { generateAIResponse } from './utils/gemini';

const response = await generateAIResponse('Explain what a POS system is');
console.log(response);
```

### Example 2: Streaming Response (ChatGPT-like)

```typescript
import { generateAIStreamResponse } from './utils/gemini';

await generateAIStreamResponse(
  'Tell me about inventory management',
  (chunk) => {
    console.log(chunk); // Each word appears gradually
  }
);
```

### Example 3: Chat Conversation

```typescript
import { GeminiChat } from './utils/gemini';

const chat = new GeminiChat();

const response1 = await chat.sendMessage('Hello!');
const response2 = await chat.sendMessage('What did I just say?');
// AI remembers the conversation context
```

---

## 🎨 Using the AI Assistant Component

### Add to Your Page:

```typescript
import AIAssistant from './components/AIAssistant';

function MyPage() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <AIAssistant />
    </div>
  );
}
```

---

## 💡 Use Cases for Your Portfolio

### 1. **Interactive Project Explainer**
Let visitors ask questions about your projects:
```typescript
const prompt = `Explain this project in simple terms: ${project.description}`;
```

### 2. **AI-Powered Contact Form**
Auto-generate professional responses:
```typescript
const prompt = `Generate a professional response to this inquiry: ${userMessage}`;
```

### 3. **Tech Stack Advisor**
Help visitors choose the right solution:
```typescript
const prompt = `Based on these requirements: ${requirements}, which of my services would be best?`;
```

### 4. **Code Snippet Generator**
Show examples of your work:
```typescript
const prompt = `Generate a React component example for ${feature}`;
```

---

## 📊 Free Tier Limits

- ✅ **60 requests per minute**
- ✅ **1,500 requests per day**
- ✅ **Free forever** for normal usage
- ✅ Perfect for portfolio websites!

---

## 🔒 Security Best Practices

1. ✅ **Never commit `.env.local`** to Git (already in .gitignore)
2. ✅ **Use environment variables** for API keys
3. ✅ **Don't expose API key** in client-side code
4. ⚠️ **For production:** Consider using a backend API to proxy requests

---

## 🛠️ Troubleshooting

### Error: "API key not found"
- Make sure `.env.local` exists
- Check that the variable name is `VITE_GEMINI_API_KEY`
- Restart your dev server after adding the key

### Error: "Failed to fetch"
- Check your internet connection
- Verify your API key is valid
- Check if you've exceeded rate limits

### Error: "CORS error"
- This is normal for direct API calls from browser
- Consider using a backend proxy for production

---

## 📚 Additional Resources

- **Gemini API Docs:** https://ai.google.dev/docs
- **API Key Management:** https://aistudio.google.com/app/apikey
- **Pricing:** https://ai.google.dev/pricing

---

## 🎯 Next Steps

1. ✅ Get your API key
2. ✅ Add it to `.env.local`
3. ✅ Test the AI Assistant component
4. 🚀 Integrate AI into your portfolio features!

---

**Need help?** Check the example component in `components/AIAssistant.tsx`
