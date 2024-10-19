// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <chat-bot platform_id="4d61f81f-3ca3-48a5-8dca-4d36d83b0e5a" user_id="8e2464b9-c444-4555-91a1-07967c44d907" chatbot_id="769f2c53-55d6-447c-824b-1da783b77098" ><a href="https://www.chatsimple.ai/?utm_source=widget&utm_medium=referral">chatsimple</a></chat-bot><script src="https://cdn.chatsimple.ai/chat-bot-loader.js" defer></script>
      </Html>
    );
  }
}

export default MyDocument;
